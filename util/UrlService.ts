interface IUrlServiceRequest {
  currentPage: number;
  search?: string;
}

const UrlService = {
  execute({ currentPage, search }: IUrlServiceRequest): string {
    return `${search !== '' ? `?search[name]=${search}` : ''}` +
      `${search !== '' ? '&' : '?'}page=${currentPage}`;
  }
}

export default UrlService;