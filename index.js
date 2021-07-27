const response = "Hello World";

const compareToResponse = (item) => {
	if (typeof item != 'string') {
		return false;
	}
	return item > response;
} 

exports.compareToResponse = compareToResponse;
