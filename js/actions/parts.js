export const MARK_FILMED = 'MARK_FILMED';
export const UNMARK_FILMED = 'UNMARK_FILMED';

export function markAsFilmed(index) {
    return {
        type: MARK_FILMED,
        payload: index,
    };
}

export function unmarkAsFilmed(index) {
    return {
        type: UNMARK_FILMED,
        payload: index,
    };
}
