interface ValidApiResponse<T> {
  ok: true,
  data: T
}

interface InvalidApiResponse {
  ok: false,
  message: string,
  stack: string,
}

type ApiResponse<T> = ValidApiResponse<T> | InvalidApiResponse;

export {
  ApiResponse, ValidApiResponse, InvalidApiResponse
}
