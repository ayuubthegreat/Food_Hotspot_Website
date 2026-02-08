import z from 'zod';

export const food_form_schema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters long"),
    email: z.string().email("Invalid email address").optional(),
    phone: z.string().min(10, "Phone number must be at least 10 digits long"),
    address: z.string().min(5, "Address must be at least 5 characters long"),
    city: z.string().min(2, "City must be at least 2 characters long"),
    state: z.string().min(2, "State must be at least 2 characters long"),
    zip_code: z.string().min(5, "Zip code must be at least 5 characters long"),
    country: z.string().min(2, "Country must be at least 2 characters long")
})