const formatDate = (date) => {
    const [year, month, day] = date.split("-");
    return `${year}년 ${Number(month)}월 ${Number(day)}일`;
};

export default formatDate;