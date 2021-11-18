import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {searchMovieRequested} from './redux/actions';
import Icon from 'react-native-vector-icons/Ionicons';
import {searchMovieResultSelector} from './redux/selectors';
import omit from 'lodash/omit';

import styled from '@constants/styled';

import {styles} from './styles';
import {ErrorContainer, MovieSearchPreview} from 'components';
import ButtonWithShadowSmall from 'components/Buttons/ButtonWithShadowSmall';
import ContainerSpace from 'components/Containers/ContainerSpace';
import HorizontalDivider from 'components/Dividers/Horizontal/HorizontalDivider';
import {Movie} from 'types/generalTypes';
import {favoriteMoviesSelector} from 'screens/FavoritiesScreen/redux/selectors';
import {keyBy} from 'lodash';
import {isMoviesIdInArray} from 'utils/arrays/isMovieIdInArray';
import {hiddenMovieToggleGlobal} from 'screens/HiddenMoviesScreen/redux/actions';
import {
  hiddenMoviesSelector,
  isHiddenMoviesGlobalSelector,
} from 'screens/HiddenMoviesScreen/redux/selectors';

interface SearchScreenProps {
  isScrollable: boolean;
}

const SearchScreen: React.FunctionComponent<SearchScreenProps> = ({
  isScrollable,
}) => {
  const dispatch = useDispatch();
  const {data, errorMessage, isFailed, isLoading} = useSelector(
    searchMovieResultSelector,
  );
  const isHiddenMoviesGlobal = useSelector(isHiddenMoviesGlobalSelector);
  const hiddenMoviesIds = useSelector(hiddenMoviesSelector);

  const searchedMoviesWithIds = keyBy(data, 'id');

  const favoriteMovies = useSelector(favoriteMoviesSelector);
  const favoriteMoviesIds = Object.keys(favoriteMovies);

  // Avoid duplicates in search result and favorites list
  const removeFavoritesFromSearchResult = omit(
    searchedMoviesWithIds,
    favoriteMoviesIds,
  );

  // Show favorite movies first, then search result
  const pushedFavoriteMoviesArray = [
    ...Object.values(favoriteMovies),
    ...Object.values(removeFavoritesFromSearchResult),
  ];

  const filterHiddenMovies = pushedFavoriteMoviesArray.filter(
    movie => movie && !isMoviesIdInArray(hiddenMoviesIds, movie.id),
  );

  const withoutHiddenMovies = isHiddenMoviesGlobal
    ? filterHiddenMovies
    : pushedFavoriteMoviesArray;

  const [searchText, setSearchText] = useState('');

  const isSearchTextFilled = searchText.length;

  // Scroll to top of the list during new search result
  const flatListRef = React.useRef<FlatList<Movie>>(null);
  const searchToTop = () => {
    flatListRef.current &&
      flatListRef.current.scrollToOffset({animated: true, offset: 0});
  };

  // Delay with a search request. Not search, if less than 3 symbols
  useEffect(() => {
    if (searchText.length <= 3) return;

    const timerId = setTimeout(() => {
      dispatch(searchMovieRequested(searchText));
      searchToTop();
    }, 1000);

    return () => clearTimeout(timerId);
  }, [searchText, dispatch]);

  const onClearSearchInputHandler = () => {
    setSearchText('');
    dispatch(searchMovieRequested(searchText));
  };

  const hideMoviesGlobalHandler = () => {
    dispatch(hiddenMovieToggleGlobal());
  };

  // Empty search result text
  const isSearchResult = pushedFavoriteMoviesArray.length;
  const emptySearchResultText = searchText.length
    ? 'Movies not found'
    : 'No added movies to favorites';

  if (isFailed && errorMessage !== null) {
    return <ErrorContainer errorMessage={errorMessage} />;
  }

  return (
    <View style={styles.mainContainer}>
      {/* SEARCH INPUT */}
      <View style={styles.searchWrapper}>
        <View style={styles.searchInput}>
          <TextInput
            value={searchText}
            placeholder="search..."
            placeholderTextColor={styled.colors.grey60opacity}
            style={styles.searchField}
            onChangeText={setSearchText}
          />
          {isLoading ? (
            <ActivityIndicator />
          ) : isSearchTextFilled ? (
            <Pressable
              style={styles.crossButtonWrapper}
              onPress={onClearSearchInputHandler}>
              <Icon
                name="ios-backspace-outline"
                size={20}
                color={styled.colors.grey30opacity}
              />
            </Pressable>
          ) : (
            <></>
          )}
        </View>

        {/* HIDE/SHOW MOVIES */}
        <ButtonWithShadowSmall
          isIcon
          iconName={isHiddenMoviesGlobal ? 'md-eye-off-outline' : 'eye-outline'}
          onPress={hideMoviesGlobalHandler}
          isDisabled={false}
          percentageWidth={15}
        />
      </View>
      <HorizontalDivider marginVertical={5} />

      {/* SEARCH RESULT */}
      <SafeAreaView style={styles.searchResultContainer}>
        {isSearchResult ? (
          <FlatList<Movie>
            data={withoutHiddenMovies}
            ref={flatListRef}
            scrollEnabled={isScrollable}
            keyboardShouldPersistTaps="handled"
            keyExtractor={movie => movie.id}
            renderItem={({item}) => (
              <View style={styles.moviePreviewWrapper}>
                <MovieSearchPreview
                  movie={item}
                  isFavorite={isMoviesIdInArray(favoriteMoviesIds, item.id)}
                />
              </View>
            )}
            ListFooterComponent={<ContainerSpace mtM marginVertical />}
          />
        ) : (
          <View style={styles.emptyResultWrapper}>
            <Text>{emptySearchResultText}</Text>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

export default SearchScreen;
