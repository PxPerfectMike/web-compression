const testData =
	'this this is test data to use in a compression algorithm 123 123 hung hung oi oi oi oi oi oi hunt butthole buttholetholethole use  use hung hung hung tthol';

const convertToUniCode = (data) => {
	const uniCode = [];
	for (let i = 0; i < data.length; i++) {
		uniCode.push(data.charCodeAt(i));
	}
	return uniCode.join('');
};
console.log('Original Data Length: ' + testData.length);
console.log('unicode: ' + convertToUniCode(testData).length);

const convertToQuaternary = (data) => {
	const quaternary = [];
	for (let i = 0; i < data.length; i++) {
		quaternary.push(data.toString(4));
	}
	return quaternary.join(' ');
};

const CTQ = convertToQuaternary(convertToUniCode(testData));
const CTQlength = CTQ.length;

console.log('Quaternary: ' + CTQ.length);

const getFactors = (number = CTQlength) => {
	const factors = [];
	const usableFactor = [];
	for (let i = 2; i <= number; i++) {
		// check if number is a factor
		if (number % i == 0) {
			factors.push(i);
		}
	}
	usableFactor.push(factors[0]);
	usableFactor.push(factors[1]);
	return usableFactor;
};

const factors = getFactors();

console.log('Factors: ' + factors);

const chunkData = (data, factor = factors[0]) => {
	const chunkedData = [];
	for (let i = 0; i < data.length; i += factor) {
		chunkedData.push(data.slice(i, i + factor));
	}
	return chunkedData;
};

const chunkedData = chunkData(CTQ);

console.log('Chunked Data Length: ' + chunkedData.length);
console.log('Chunked Data: ' + chunkedData);

export function prepareData(data) {
	const uni = convertToUniCode(data);
	const qua = convertToQuaternary(uni);
	const fac = getFactors(qua.length);
	const chu = chunkData(qua, fac[0]);
	return chu;
}
