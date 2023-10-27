export type RES_DATA = {
    message: string;
    DATA: string;
};

export const data: RES_DATA = {
    message: 'test',
    DATA: 'hi there',
};

export function utils(): string {
    return 'utils';
}
