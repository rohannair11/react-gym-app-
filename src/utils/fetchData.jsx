export const Exerciseoptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};


export const fetchdata = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}