export const ADD_BREADMID = "ADD_BREADMID";
export const DELETE_BREADMID ="DELETE_BREADMID";

export function addBreadMid(breaditem, amount) {
    return {
        type:ADD_BREADMID,
        breaditem,
        amount
    }
}

export function deleteBreadMid(breaditem, amount) {
    return {
        type:DELETE_BREADMID,
        breaditem,
        amount
    }
}
