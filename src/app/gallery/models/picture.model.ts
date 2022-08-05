export class Picture {
    id!: string;
    created_at!: Date;
    width!: number;
    height!: number;
    color!: string;
    blur_hash!: string;
    likes!: number;
    liked_by_user!: boolean;
    description!: string;
    urls!: [];
}
