import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {searchMovieRequested} from './redux/actions';
import Icon from 'react-native-vector-icons/Feather';
import {searchMovieResultSelector} from './redux/selectors';
import omit from 'lodash/omit';

import styled from '@constants/styled';

import {MovieDetailsType} from './redux/types';
import {styles} from './styles';
import {MoviePreview} from 'components';
import ButtonWithShadowSmall from 'components/Buttons/ButtonWithShadowSmall';
import ContainerSpace from 'components/Containers/ContainerSpace';
import HorizontalDivider from 'components/Dividers/Horizontal/HorizontalDivider';

interface SearchScreenProps {
  isScrollable: boolean;
}

const SearchScreen: React.FunctionComponent<SearchScreenProps> = ({
  isScrollable,
}) => {
  const dispatch = useDispatch();

  const withoutHiddenMovies = [];

  const [searchText, setSearchText] = useState('');

  const isSearchTextFilled = searchText.length;

  // Scroll to top of the list during new search result
  const flatListRef = React.useRef<FlatList<MovieDetailsType>>(null);
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
  };

  const hideMoviesGlobalHandler = () => {
    // dispatch(hiddenMovieToggleGlobal());
  };

  // Empty search result text
  const isSearchResult = [].length;
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
                name="x-circle"
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
        {isSearchResult ? (
          <FlatList
            data={withoutHiddenMovies}
            ref={flatListRef}
            scrollEnabled={isScrollable}
            keyboardShouldPersistTaps="handled"
            keyExtractor={movie =>
              movie?.id.toString() || Math.random().toString()
            }
            renderItem={({
              item: {
                id,
                title,
                overview,
                release_date,
                vote_average,
                poster_path,
              },
            }) => (
              <View style={styles.moviePreviewWrapper}>
                <MoviePreview
                  id={id}
                  title={title}
                  overview={overview}
                  year={release_date || '----'}
                  vote={vote_average}
                  posterUrl={poster_path}
                  isFavorite={favoriteMoviesIds.includes(id.toString())}
                  isHidden={hiddenMoviesIds.includes(id)}
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
