interface IUrlServiceRequest {
  page: string | string[];
  search?: string | string[];
}

const UrlService = {
  execute({ page, search }: IUrlServiceRequest): string {
    console.log(page)
    console.log(search)
    return `${!!search ? `?search[name]=${search}` : ''}` +
      `${!!search ? '&' : '?'}page=${page}`;
  }
}

export default UrlService;