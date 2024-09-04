export const getAllProducts = async () => {
    const response = await fetch(
        'https://vqdn19f2ul.execute-api.us-east-1.amazonaws.com/prod/get-weapons'
    );
    const data = await response.json();
    return data;
};
