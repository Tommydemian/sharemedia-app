export const userQuery = ( username: string ) => {
    const query = `*[_type == "user" && username == '${username}'][0]`;

    return query
}