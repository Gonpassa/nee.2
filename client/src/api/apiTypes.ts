import { IJournalRequest, IJournalResponse } from "../queries/types/journal"

export type IApiRequestMethods = 'POST' | 'GET' | 'PUT' | 'DELETE'

export type IApiRequestTypes = 'base' | 'journal'

export type IRequestData = IJournalRequest

export type IResponseData = IJournalResponse