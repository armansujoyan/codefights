std::vector<std::vector<int>> boxBlur(std::vector<std::vector<int>> image) {
    std::vector<std::vector<int>> result (image.size()-2, std::vector<int>(image.at(0).size()-2));

    for(size_t row {1}; row <= image.size() - 2; ++row){
        for(size_t col {1}; col <= image.at(row).size() - 2; ++col) {
            int acc {image[row-1][col-1] + image[row][col-1] + image[row+1][col-1] +
                    image[row-1][col] + image[row][col] + image[row+1][col] +
                    image[row-1][col+1] + image[row][col+1] + image[row+1][col+1]};
            result.at(row-1).at(col-1) = acc/9;
        }
    }
    return result;
}