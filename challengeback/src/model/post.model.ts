export interface Post {
        id: string,
        user: string,
        post_date: string,
        description: string,
        likes: number,
        comments: Comment[],
        url_imagem: string
}
export interface Comment{
    user: string,
    comment: string
}

//const post:Post = {}
