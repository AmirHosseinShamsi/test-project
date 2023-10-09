export const postData = async (postData , url) => {
    try {
        const response = await fetch(
            url,
            {
                method: "POST",
                headers: { "Content-Type": "application/json", charset: "utf-8" },
                body: JSON.stringify(postData),
            },
        );
        if (!response.ok) {
            const errorObject = await response.json();
            return errorObject.message;
        }
        const data = await response.json();
        return data
    }
    catch (err) {
        console.log('failed to fetch data')
    }
};
