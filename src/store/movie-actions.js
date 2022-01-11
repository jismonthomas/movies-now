export const fetchData = async (fetchUrl) => {
    try {
        const response = await fetch(fetchUrl);
        const data = await response.json();
        if (!response.ok) {
            throw new Error(`Fetching ${fetchUrl}  Failed!`);
        }
        else {
            return (data);
        }
    }
    catch (err) {
        console.log(err.message);

    }
}