import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface Artwork {
  id: string;
  title: string;
  imageUrl: string;
  year?: string;
  dimensions?: string;
  technique?: string;
  description?: string;
}

export interface ArtworkState {
  artworks: Artwork[];
  loading: boolean;
  error: string | null;
}

const initialState: ArtworkState = {
  artworks: [],
  loading: false,
  error: null
};

export const fetchArtworks = createAsyncThunk<Artwork[]>(
  'artworks/fetchArtworks',
  async () => {
    const result = [
      {
        id: '1',
        imageUrl: '../../../downloaded_images/huile-02.jpg',
        title: '无题',
        year: '1969年作品',
        dimensions: '100x100cm',
        technique: '油画',
        description: '这是一幅抽象画，描绘了天空中的云彩和远处的山脉。',
      },
      {
        id: '2',
        imageUrl: '../../../downloaded_images/huile-03.jpg',
        title: '无题',
        year: '1969年作品',
        dimensions: '100x100cm',
        technique: '油画',
        description: '这是一幅抽象画，描绘了天空中的云彩和远处的山脉。',
      },
      {
        id: '3',
        imageUrl: '../../../downloaded_images/portrait-de-ma-femme.jpg',
        title: '无题',
        year: '1969年作品',
        dimensions: '100x100cm',
        technique: '油画',
        description: '这是一幅抽象画，描绘了天空中的云彩和远处的山脉。',
      }

    ];
    return result;
  }
);

const artworkSlice = createSlice({
  name: 'artworks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArtworks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchArtworks.fulfilled, (state, action) => {
        state.loading = false;
        state.artworks = action.payload;
      })
      .addCase(fetchArtworks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || '加载失败';
      });
  },
});

export default artworkSlice.reducer; 