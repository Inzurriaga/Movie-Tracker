import React from 'react';
import { GenreBox, mapStateToProps } from './GenreBox';
import { shallow } from 'enzyme';

const mockGenreProps = [
  {
    page: 1,
    results: [
      {
        adult: false,
        backdrop_path: "/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg",
        genre_ids: [28, 12, 878],
        id: 299537,
        original_title: "Captain Marvel"
      }
    ],
    total_pages: 1176,
    total_results: 23512,
  }
]


describe('GenreBox', () => {
  let grenreBox;

  describe('GenreBox Component', () => {

    beforeEach(() => {
      grenreBox = shallow(<GenreBox genres={mockGenreProps}/>)
    })

    it('should match the snapshot', () => {

      expect(grenreBox).toMatchSnapshot()

    })

    it('should have default properties', () => {

      expect(grenreBox.state()).toEqual({
        genre: ["Action", "Horror", "Comedy"]
      });

    })

  })


  describe('GenreBox mapStateToProps', () => {

    it('should return an object with genres information', () => {
      const mockState = {
        genres: {
                  page: 1,
                  results: [{
                    adult: false,
                    backdrop_path: "/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg",
                    id: 299537,
                    original_language: "en"
                  }],
                  total_pages: 1176,
                  total_results: 23512
                },
        category: []
      }

      const expected = {
        genres: {
                  page: 1,
                  results: [{
                    adult: false,
                    backdrop_path: "/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg",
                    id: 299537,
                    original_language: "en"
                  }],
                  total_pages: 1176,
                  total_results: 23512
                },

      }

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected)
    })

  })

})
