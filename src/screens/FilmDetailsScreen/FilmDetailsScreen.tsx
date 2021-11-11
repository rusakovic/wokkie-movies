import ButtonWithShadowSmall from 'components/Buttons/ButtonWithShadowSmall';
import ContainerCenter from 'components/Containers/ContainerCenter';
import DefaultText from 'components/Text/DefaultText/DefaultText';
import styled from 'constants/styled';
import {moviesMock} from 'mock/movies';
import React from 'react';
import {Image, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

interface FilmDetailsScreenProps {}

const FilmDetailsScreen: React.FunctionComponent<FilmDetailsScreenProps> =
  props => {
    const movie = moviesMock.movies[14];
    return (
      <ContainerCenter style={{height: hp(100)}}>
        {/* BACKDROP COVER */}
        <ContainerCenter style={{height: hp(30)}} isFullWidth>
          <ContainerCenter isFullWidth>
            <Image
              source={{uri: movie.backdrop}}
              style={{height: '100%', width: '100%'}}
              resizeMode="cover"
            />
          </ContainerCenter>
          <View
            style={{
              height: '25%',
              backgroundColor: styled.colors.black,
              position: 'absolute',
              width: '100%',
              bottom: 0,
              opacity: 0.5,
            }}
          />
        </ContainerCenter>
        <View
          style={{
            flex: 1,
            height: '100%',
            top: -hp(11),
          }}>
          {/* MOVIE DETAILS */}
          <ContainerCenter
            style={{
              height: '30%',
              alignItems: 'center',
            }}>
            <ContainerCenter
              style={{
                width: '90%',
              }}
              flexDirectionRow>
              <ContainerCenter
                isFullWidth
                style={{height: '100%', width: '30%'}}>
                <Image
                  source={{uri: movie.poster}}
                  style={{height: '100%', width: '100%'}}
                  resizeMode="contain"
                />
              </ContainerCenter>
              <ContainerCenter
                style={{
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  width: '70%',
                }}>
                {/* TITLE AND RATING */}
                <ContainerCenter
                  flexDirectionRow
                  justifyContentSpaceBetween
                  style={{
                    marginTop: '15%',
                    alignItems: 'center',
                  }}>
                  <View style={{width: '75%'}}>
                    <DefaultText
                      s
                      fontColor={styled.colors.white.white}
                      numberOfLines={2}>
                      {movie.title}
                    </DefaultText>
                  </View>
                  <View style={{width: '20%'}}>
                    <DefaultText
                      xl
                      fontColor={styled.colors.white.white}
                      isTextAlignCenter>
                      {movie.imdb_rating}
                    </DefaultText>
                  </View>
                </ContainerCenter>

                {/* FAVORITE AND HIDE */}
                <View
                  style={{
                    flexDirection: 'row',
                    height: '30%',
                    width: '40%',
                    justifyContent: 'space-between',

                    padding: 2,
                  }}>
                  <ButtonWithShadowSmall
                    isIcon
                    iconName={false ? 'md-eye-off-outline' : 'eye-outline'}
                    onPress={null}
                    isDisabled={false}
                    iconSize={20}
                    percentageWidth={40}
                  />
                  <ButtonWithShadowSmall
                    isIcon
                    iconColor={styled.colors.yellow.star}
                    iconName={true ? 'star' : 'star-outline'}
                    onPress={() => {}}
                    isDisabled={false}
                    iconSize={20}
                    percentageWidth={40}
                  />
                </View>
              </ContainerCenter>
            </ContainerCenter>

            {/* YEAR, LENGTH, DIRECTOR  */}
            <ContainerCenter
              isFullWidth
              isContainer
              flexDirectionRow
              isMarginVertical1>
              <DefaultText xs>
                {movie.released_on.substring(0, 4)} |{' '}
              </DefaultText>
              <DefaultText xs>{movie.length} | </DefaultText>
              <DefaultText xs>{movie.director}</DefaultText>
            </ContainerCenter>
          </ContainerCenter>

          <ScrollView
            style={{
              marginHorizontal: wp(4),
              marginTop: wp(10),
              // height: hp(60),
            }}>
            {/* CAST */}
            <ContainerCenter isMarginVertical2 style={{width: '90%'}}>
              <DefaultText s uppercased fontFamilyBold>
                cast:{' '}
              </DefaultText>
              <DefaultText numberOfLines={2} s marginTopCustom={5}>
                {movie.cast.join(', ')}
              </DefaultText>
            </ContainerCenter>

            {/* MOVIE DESCRIPTION */}
            <ContainerCenter isMarginVertical2>
              <DefaultText s uppercased fontFamilyBold>
                description:{' '}
              </DefaultText>
              <DefaultText
                numberOfLines={15}
                fitText={false}
                s
                marginTopCustom={5}>
                {movie.overview}
              </DefaultText>
            </ContainerCenter>
          </ScrollView>
        </View>
      </ContainerCenter>
    );
  };

export default FilmDetailsScreen;
