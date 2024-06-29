

export const handlePrevClick = (currentIndex, setCurrentIndex ,projects) => {
    const isFirstSlide = currentIndex === 0;
    // newIndex
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex -1;

    return setCurrentIndex(newIndex);
}

export const handleNextClick = (currentIndex, setCurrentIndex ,projects) => {
    const isLastSlide = currentIndex === projects.length - 1;
    // newIndex
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    return setCurrentIndex(newIndex);
}