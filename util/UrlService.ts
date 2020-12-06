interface IUrlServiceRequest {
  page: string | string[];
  search?: string;
}

const UrlService = {
  execute({ page, search }: IUrlServiceRequest): string {
    return `${search !== '' ? `?search[name]=${search}` : ''}` +
      `${search !== '' ? '&' : '?'}page=${page}`;
  }
}

export default UrlService;