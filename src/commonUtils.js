import colors from './variables.scss';
export const formatNumber = (value) => value?.toLocaleString();

export const sentimentStatusFinder = (value) => {
    if (value > 80) {
        return { text: "Extreme Greed", color: colors['primary-success'] }
    } else if (value < 80 && value > 50) {
        return { text: "Greed", color: colors['primary-success'] }
    }
    else if (value === 50) {
        return { text: "Neutral", color: colors['primary-dark'] }
    } else {
        return { text: 'Fear', color: colors['primary-red'] }
    }
}

export const getMarketsData = async () => {
    try {
        let response = await fetch('mock-data.json');
        response = await response.json();
        return response;
    } catch (error) {
        return error
    }
}