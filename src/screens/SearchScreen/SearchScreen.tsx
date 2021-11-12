import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ListRenderItem,
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
import {MoviePreview, MovieSearchPreview} from 'components';
import ButtonWithShadowSmall from 'components/Buttons/ButtonWithShadowSmall';
import ContainerSpace from 'components/Containers/ContainerSpace';
import HorizontalDivider from 'components/Dividers/Horizontal/HorizontalDivider';
import {Movie} from 'types/generalTypes';

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
  console.log('🚀 ~ file: SearchScreen.tsx ~ line 37 ~ data', data);

  const withoutHiddenMovies = [];

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

    return (): void => clearTimeout(timerId);
  }, [searchText, dispatch]);

  const onClearSearchInputHandler = () => {
    setSearchText('');
    dispatch(searchMovieRequested(searchText));
  };

  const hideMoviesGlobalHandler = () => {
    // dispatch(hiddenMovieToggleGlobal());
  };

  // Empty search result text
  const isSearchResult = data && data.length;
  const emptySearchResultText = searchText.length
    ? 'Movies not found'
    : 'No added movies to favorites';

  return (
    <View style={styles.mainContainer}>
      <View style={styles.searchWrapper}>
        <View style={styles.searchInput}>
          <TextInput
            value={searchText}
            placeholder="search..."
            style={styles.searchField}
            onChangeText={setSearchText}
          />
          {isSearchTextFilled ? (
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
        <ButtonWithShadowSmall
          isIcon
          iconName={true ? 'md-eye-off-outline' : 'eye-outline'}
          onPress={hideMoviesGlobalHandler}
          isDisabled={false}
          percentageWidth={15}
        />
      </View>
      <HorizontalDivider marginVertical={5} />
      <SafeAreaView style={styles.searchResultContainer}>
        {isSearchResult && data ? (
          <FlatList<Movie>
            data={data}
            ref={flatListRef}
            scrollEnabled={isScrollable}
            keyboardShouldPersistTaps="handled"
            keyExtractor={movie => movie.id}
            renderItem={({
              item: {
                id,
                poster,
                backdrop,
                cast,
                director,
                length,
                overview,
                imdb_rating,
                title,
                released_on,
              },
            }) => (
              <View style={styles.moviePreviewWrapper}>
                <MovieSearchPreview
                  id={id}
                  title={title}
                  overview={overview}
                  year={released_on}
                  rating={imdb_rating}
                  posterUri={poster}
                  backdrop={backdrop}
                  cast={cast}
                  director={director}
                  length={length}
                  isFavorite={false}
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
