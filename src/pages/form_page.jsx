import { useState } from "react";
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { submitFoodForm } from "../components/store/slices/food_form_slice";

export const Form_Page = () => {
    const [phone, setPhone] = useState("");
    const {data: formData, error} = useSelector((state) => state.foodForm);
    const dispatch = useDispatch();
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            state: "",
            zip_code: "",
            country: ""
        }
    }) 
    const onSubmit = async (data) => {
        console.log(error, data, formData)
        if (!evaluateData(data)) {
            alert("Please check your input data for errors.");
            return;
        }
        if (formData && formData.name === data.name && formData.phone === data.phone) { 
            alert("You have already submitted the form with the same name and phone number.");
            return;
        } else {
            data.token = Math.round(Math.random() * 100000000) + Date.now();
            console.log("Generated token:", data.token);
        }
        if (data.phone == "") {
            console.log("Phone number is empty, using local state value:", phone);
            data.phone = phone;
        }


        try {
            await dispatch(submitFoodForm({ form_data: data })).unwrap();
            alert("Form submitted successfully!");
            reset();
            setPhone("");
        } catch (error) {
            alert("Failed to submit the form: " + (error.message || JSON.stringify(error)));
            console.error("Error details:", error);
        }
    }
    const evaluateData = (data) => {
        if (Number(data.address[0])) {
            return true;
        }
        return false;
    }
    const setPhoneNumber = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 3 && value.length <= 6) {
            value = value.slice(0, 3) + '-' + value.slice(3);
        } else if (value.length > 6) {
            value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
        }
        setPhone(value);
    }
    return (
        <>
        <div className="food_form">
            <h1>Food Request Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name *</label>
                <input 
                    type="text" 
                    {...register("name")} 
                    placeholder="Enter your name here."
                />
                {errors.name && <p className="error">{errors.name.message}</p>}
                <label>Email</label>
                <input 
                    type="email" 
                    {...register("email")} 
                    placeholder="Enter your email here."
                />
                {errors.email && <p className="error">{errors.email.message}</p>}
                <label>Phone Number *</label>
                <p>Only US phone numbers are currently supported.</p>
                <input 
                    type="text" 
                    {...register("phone")} 
                    placeholder="Enter your phone number here."
                    onChange={setPhoneNumber}
                    value={phone}
                />
                {errors.phone && <p className="error">{errors.phone.message}</p>}
                <label>Address</label>
                <input
                    type="text"
                    {...register("address")}
                    placeholder="Enter your address here."
                />
                {errors.address && <p className="error">{errors.address.message}</p>}
                <label>City</label>
                <input
                    type="text"
                    {...register("city")}
                    placeholder="Enter your city here."
                />
                {errors.city && <p className="error">{errors.city.message}</p>}
                <label>State</label>
                <input
                    type="text"
                    {...register("state")}
                    placeholder="Enter your state here."
                />
                {errors.state && <p className="error">{errors.state.message}</p>}
                <label>Zip Code</label>
                <input
                    type="text"
                    {...register("zip_code")}
                    placeholder="Enter your zip code here."
                />
                {errors.zip_code && <p className="error">{errors.zip_code.message}</p>}
                <button type="submit">Submit</button>
                {errors.name && <p className="error">{errors.name.message}</p>}
                {error && <p className="error">Error submitting form: {error.message || JSON.stringify(error)}</p>}
            </form>
        </div>
        </>
    )
}