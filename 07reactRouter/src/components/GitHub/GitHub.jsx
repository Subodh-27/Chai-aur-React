import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {

    const data = useLoaderData();

    /* const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data);
            });
    }, []); */

    return (
        <div className="m-4 text-3xl text-center text-white bg-gray-600">
            GitHub followers: {data.followers}
            <div className="flex items-center justify-center">
                <img src={data.avatar_url} alt="Git Picture" width={300} />
            </div>

        </div>
    );
}

export default GitHub;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    return response.json();
};