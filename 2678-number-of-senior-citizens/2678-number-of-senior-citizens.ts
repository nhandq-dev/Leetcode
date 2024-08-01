function countSeniors(details: string[]): number {
    return details.filter(d => parseInt(d.substring(11, 13)) > 60 ).length
};