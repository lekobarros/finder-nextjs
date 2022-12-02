import request from 'src/api/request';

type User = {
  id: number;
  email: string;
  first_name: string;
};

type GetUsersResponse = {
  data: User[];
};

type params = {
  country: string;
  page: number;
  page_size: number;
  chart_name?: string;
};

export const getChartTracks = (params: params) : any => {
  return request.get<GetUsersResponse>('/chart.tracks.get', { params })
}

export default {
  getChartTracks
};