export type TCategory = {
    id?: number,
    name: string,
    media: [{
        original_url: string
    }]
}
export type TCategoryProperty =
    {
        id?: number,
        name: string,
        name_ar?: string,
        address: string,
        description: string,
        description_ar: string,
        created_at?: string,
        updated_at?: string,
        media: [{
            id: number,
            model_type: string,
            model_id: number,
            uuid: string,
            collection_name: string,
            name: string,
            file_name: string,
            mime_type: string,
            disk: string,
            conversions_disk: string,
            size: Number,
            manipulations: [],
            custom_properties: [],
            generated_conversions: [],
            responsive_images: [],
            order_column: number,
            created_at: string,
            updated_at: string,
            original_url: string,
            preview_url: string
        }],
        category: [
            {
                id: Number,
                name: string,
                name_ar: string,
                created_at: string,
                updated_at: string,
                pivot: {
                    restaurant_id: number,
                    category_id: number,
                    id: number
                }
            }
        ]


    } | null;
;
