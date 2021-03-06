// /*

/* ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো। */

// যখন এমন একটা ভ্যারিয়েবল ডিক্লেয়ার করবো যেটার মান পরবর্তীতে পরিবর্তন করবো না
// তবে আমরা সেই ভ্যারিয়েবল const দিয়ে ডিক্লেয়ার করবো।

const friendName = 'Alif Hossain';


// যখন আমরা কোনো একটা ভ্যারিয়েবল এর মান পরবর্তীতেও পরিবর্তন করে ব্যবহার করতে
// চাইবো তখন আমরা let ব্যবহার করবো

// */


/////////////////////////////////////////////////////////////////////////
const presentAddress = 'Uttara, Dhaka';
const friendDetails = `My friend name is ${ friendName }. His present Address is ${ presentAddress }.`
console.log(friendDetails);



/* ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও।  */
const products = {
    name: 'water bottle',
    price: 50,
    color: 'yellow'
};
const myShoppingDetails = `I want to buy a ${ products.name } which price is ${ products.price } Tk.`;
console.log(myShoppingDetails);


/* ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে।  */
const divide = x => x / 5;
console.log(divide(35));


/* 
৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 
 */
const math = (x, y) => (x + 2) * (y + 2);
console.log(math(20, 25));


/* ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। */
const multiply = (x, y, z) => x * y * z;
console.log(multiply(2, 4, 6));

const multiply2 = (x, y, z) =>
{
    const result = x * y * z;
    return result;
}

console.log(multiply2(8, 8, 8));

/* ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।  */

const math2 = (x, y) =>
{
    const sum1 = x + 2;
    const sum2 = y + 2;
    const multiply = sum1 * sum2;
    return multiply;
}

console.log(math2(32, 33));

/* ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। */
const numbers = [23, 25, 30, 45, 15, 12];
const multiplyFiveTime = numbers.map(number => number * 5);
console.log(multiplyFiveTime);

/* ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো  */

const manyNumbers = [23, 25, 30, 45, 15, 12];
const findOdd = manyNumbers.filter(manyNumber => manyNumber % 2);
console.log(findOdd);


/* ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। */
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 5000, color: 'black' },
    { name: 'Old Monitor', price: 5000, color: 'white' },
    { name: 'water glass', price: 3, color: 'white' }
];

const preferableProdcut = products.find(product => product.price == 5000);
console.log(preferableProdcut);

/* ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। */

/*//জাভাস্ক্রিপ্ট এ array এর মধ্যে map হচ্ছে ওই array এর প্রত্যেকটা উপাদানকে নিয়ে কিছু একটা করবে। forEach এর মাধ্যমে array এর মধ্যে কোনো একটা কন্ডিশন চালিয়ে array এর মধ্যে থেকে কিছু একটা বের করা। আর filter এর কাজ ও সেইম forEach এর মতো।  */



/* ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।  */

const product =
{
    name: 'mobile phone',
    price: 15000,
    color: 'black'
};
const { name, price, color } = product;
console.log(name, price, color);

/* ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে।  */
const array = ['zero', 'one', 'two', 'three', 'four'];

const [one, two, three, four] = array;
console.log(three);

/* ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। */

function threeAdd(num1, num2, num3 = 7)
{
    return num1 + num2 + num3;
}

console.log(threeAdd(20, 25));


/* ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট ) */
const ssFoundation = {
    type: 'company',
    product: 'software',
    employee: 40,
    making: 'website',
    framework: {
        laravel: 'yes',
        php: 'yes',
        java: 'yes',
        javascript: 'yes',
        css: {
            tailwind: 'yes',
            bootstrap: 'yes',
            vanilaCss: 'yes',
            html: {
                versonOne: 1996,
                versonTwo: 1997,
                versionThree: ['updateOne', 'updateTwo', 'updateThree']
            }
        }
    }
};
/* const htmlVersion = ssFoundation.framework.css.html.versionThree;
console.log(htmlVersion); */




// ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো। 
const htmlVersion = ssFoundation?.framework?.css?.html?.versionThree;
console.log(htmlVersion);