import {Meta, createQuery} from '../utils/apiRequests';

export type Label = {
    id: string;
    name: string;
    slug: string;
    created_at: string;
    updated_at: string;
}

export interface LabelsResponseType {
    meta?: Meta
    labels: Label[]
}

const dataType = 'LabelsResponseType';

export const useBrowseLabels = createQuery<LabelsResponseType>({
    dataType,
    path: '/labels/',
    defaultSearchParams: {limit: 'all'}
});
