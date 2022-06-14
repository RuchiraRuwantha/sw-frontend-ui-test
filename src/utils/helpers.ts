export const ApiResponseRestructure = (obj: string) => {
    return JSON.parse(obj.replace(/,\s*,/, ','));
};

export const GetPath = (path: string) => {
    if (path && path.charAt(0) !== "/") {
        return "/" + path;
    }
    return path;
}