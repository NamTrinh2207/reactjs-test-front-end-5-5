import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Category() {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const getCategory = async () => {
            axios.get('http://localhost:8080/api/category').then(res => {
                setCategory(res.data)
                console.log(res.data)
            }).catch((err) => {
                console.error(err)
            })
        }
        getCategory();
    }, []);
    return (
        <>
            <div>
                {category.map((category) => {
                    return (
                        <p>{category.name}</p>
                    )
                })
                }
            </div>

        </>
    )
}