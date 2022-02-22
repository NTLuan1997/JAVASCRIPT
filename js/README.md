<!-- JAVASCRIPT BASIC

1) Giới thiệu một số hàm built-in
    - Console
    - confirm
    - Prompt
    - Set timeout
    - Set interval

1.1) Example:
    Built-in Confirm
    var Confirm = confirm("Xac nhan ban da du 18 tuoi");

    Built-in Prompt
    var rePrompt = prompt("Nhập số tuổi hiện tại của bạn");

    Built-in Set timeout
    setTimeout(function () {
        console.log("Set timeout function");
    }, 2500);

    Built-in Set interval
    setInterval(function() {
        console.log("Set interval function");
    }, 2500);


2) Toán tử số học.
   - Cộng
   - Trừ
   - Nhân
   - Lũy thừa
   - Chia
   - Chia lấy dư
   - Tăng 1 giá trị
   - Giảm 1 giá trị


2.1) Example:
    var number = 10
    var a = ++number * 3 - number-- * 2 ==> (11 * 3 - 11 * 2) == 33 - 22 = 11
    console.log(number);

    var b = number++ * 2 - --number * 3 ==> (10 * 2 - 10 * 3)  == 20 - 30 = -10
    console.log(a + b);


3) kiểu dữ liệu trong Javascript
    3.1) Kiểu dữ liệu nguyên thủy - Primitive Data
    - Number
    - String
    - Boolean
    - Undefined
    - null
    - Sysmbol

    3.2) Kiểu dữ liệu phức tap - Complex Data
    - Function
    - Object

4) Toán tử && và Toán tử ||
    var result = "A" && "B";
    console.log(result); ==> B

    + Trong phép tính sau giá trị được đọc từ trái qua phải và lấy giá trị sau cùng để gán giá tri cho biến result.
    + Các biến này phải khác 6 giá trị falsy sau:
        - 0
        - "" hoặc ''
        - Null
        - Undefined
        - NaN
        - False

    + Nếu trong biểu thức logic có tồn tại một trong sau giá trị phía trên nó sẽ nhận giá trị đó trả lại cho result.
    var result = "A" && null && "C";
    console.log(result); ==> null

1) Example:
      function run(a, b) {
          let result
          result = ((a && b) || undefined);
          return result
      }
    console.log(run(-1, 20));


/* GET DATA JSON WITH XMLHTTPREQUEST */

    let xhr = new XMLHttpRequest();
    let data;
    xhr.onload = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                console.log("Hello 5 trăm anh em");
                console.log(xhr.responseText);
            }

            if (xhr.status == 404) {
                console.log("File or source not found");
            }
        }
    }

    xhr.open("GET", "data.json", true);
    xhr.send();
    console.log(data);

Function:
    1) Hàm:
        - Là một khối mã
        - Làm 1 việc cụ thể
    2) Loại:
        - Build-in
        - Tự định nghĩa
    3) Tính chất:
        - Không thực thi khi được định nghĩa.
        - Thực thi khi có người gọi.
        - Hàm có thề có tham số
        - Hàm có thể trả về một giá trị.

Example:
    function functionName() {};
    function functionName(parameter) {};
    function functionName(rarameter) { return value; };
    (function(){
        Nội dung thực thi
    })();

    1) Tham số:
        - Định nghĩa.
        - Tính private.
        - Một tham số.
        - Nhiều tham số.
    2) Truyền tham số:
        - Một tham số.
        - Nhiều tham số.
    3) Arguments:
        - Đôi tượng arguments.
        - Giới thiệu for.

    function team(...parameter) {
        parameter.forEach(E => {
            console.log(E);
        })
    }


    4) Một số điều cần biết về function.
        -Khi function đặt trùng tên. -> function định nghĩa function trùng tên, function khai báo sau cũng sẽ  được gọi.
        -Khai báo biến trong hàm. -> biến chỉ có giá trị trong hàm.
        -Định nghĩa hàm trong hàm. -> hàm được khai báo trong hàm chỉ có giá trị trong hàm.

    5) Polyfill => Phương thức(Khái niệm) giúp trình duyệt cũ hỗ trợ những phương thức javascript cung thêm vào về sau.
        VD (includes);
        if (String.prototype.includes) {
            console.log("Browser have support method include");
        } else {
            console.log("Browser do not support method include");
        }
    6) Tự định nghĩa lại phương thức đó.

Object:
    - Khởi tạo Object.
    - Constructor() trong object.
    - Prototype trong object.

    - Single object.
        let animal = {
            name: "Dog",
            type: "Animal"
        };

    - Constructor object.
        function User(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.getInfo = function () {
                return `${this.firstName} ${this.lastName}`;
            }
        }

        User.prototype.age = 25;
        User.prototype.getAge = function () {
            return this.age;
        }

        let student = new User("Nguyen", "Van A");
        console.log(student);
        console.log(student.getInfo());


Date:
    let date = new Date();
    let year = date.getYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let second = date.getSeconds();
    console.log(`${hour}:${second} - ${day}/${month}/${year}`);

Array:
    Phần 1:
        1) Khai báo - tạo mảng.
        2) Kiểm tra phải là mảng.
        3) Kiểm tra độ dài của mảng.

    Phần 2:
        1) Join();
        2) toString();
        3) pop();
        4) push();
        5) shift();
        6) unshift();
        7) replace();
        8) replaceAll();
        9) slice();
        10) splice();
        11) reduce();
        12) find();
        13) findAll();
        14) filter();
        15) search();
        16) indexOf();
        17) lastIndex();
        18) map();
        19) sort();
        20) include();
        21) length;

    let course = [
        {
            id: 1,
            name: "Javascript",
            coin: 250
        },
        {
            id: 2,
            name: "PHP",
            coin: 250
        },
        {
            id: 3,
            name: "HTML/CSS",
            coin: 0
        },
        {
            id: 4,
            name: "Java",
            coin: 250
        },
        {
            id: 5,
            name: "Ruby",
            coin: 0
        },
        {
            id: 6,
            name: "Ruby",
            coin: 0
        }
    ];

    1) Method Map()

        let newCourse = course.map(function (course, index) {
            return {
                id: course?.id,
                name: `Khoa hoc: ${course?.name}`,
                coin: course?.coin,
                coinText: `Gia: ${course?.coin}`
            }
        });
        console.log(newCourse);


    2) Method Reduce()

    Example 1) Method Reduce.
        function coinHandler(accumunlator, currentValue, currentIndex, originalValue) {
            return accumunlator + currentValue?.coin;
        }
        let newCourse = course.reduce(coinHandler, 0);


    Example 2) Overwrite method reduce of Object Array.

        let team = [1, 2, 3, 4, 5];
        Array.prototype.reduce2 = function(fb, initialValue){
            let t;
            let currentValue;
            if(initialValue == undefined) {
            if(!t) {
                t = this[0];
                currentValue = this[1];
                t = fb(t, currentValue);
            }
            this.forEach((e, index) => {
                if(index != 0 && index != 1) {
                    t = fb(t, e);
                }
            });
            } else {
                t = initialValue;
                this.forEach((e, index) => {
                    t = fb(t, e);
            });
            }
        return t;
        }
        console.log(team.reduce2((a, b) => a + b));

Callback function:
    + Điều kiện:
        1) Phải là hàm.
        2) Phải được truyền qua đối số.
        3) Phải được gọi lại trong thân của hàm khác.

    Example 1:

Dom:
    + Thành phần Dom:
        - Element
        - Attributes
        - text
    
    + Thành phần Element:
        - Có thể truy cập thông qua: id/ class/ tag/ Css selector/ Html collection.
        - Truy cập qua class name sẽ trả về HTMLCollection(3) [];
        - Truy cập qua tag name sẽ trả về HTMLCollection(3) [];
        - Truy cập Html collection(Form/ a/ ...) => document.forms[0] || document.forms.idForm

    + Method InnerText - textContent.
        - InnerText => lấy ra giá trị như những gì thể hiện trên browser.
        - textContent => lấy ra giá trị như những gì có trong source code HTML.

    + Method InnerHTML - outerHTML.
    + Dom event.

        - closest("selection name");  Phương thức của Dom element dùng để kiểm tra xem nó và phần tử cha của nó có tồn tại class hoặc id đó hay không.

        root.addEventListener("click", (e) => {
            console.log(e.target.closest(".del"));
        })


Json/ Fetch/ Promise - Async - Sync - Await/ Postman:
    + Promise:
        - Callback hell là gì.
        - Sync Là gì.
        - Async là gì.
        - Pain của việc sử dụng callback.
        - Lý thuyết/ cách hoạt động.
        - Ví dụ.

    + Callback hell:

        setTimeout(() => {
            console.log(1);
            setTimeout(() => {
                console.log(2);
                setTimeout(() => {
                    console.log(3);
                }, 1000);
            }, 1000);
        }, 1000);

    + Promise:
        -Promise có 3 trạng thái:
            => Pendding (success || fail).
            => Fulfilled (success) trong trạng thái resolve.
            => Rejected (fail) trong trạng thái reject.

        - Finally là cuối cùng luôn được chạy qua - done.

            function sleep(ms) {
                return new Promise((resolve, reject) => {
                    setTimeout(resolve, ms);
                })
            }

            sleep(1000)
                .then(() => {
                    console.log(1);
                    return sleep(1000);
                })
                .then(() => {
                    console.log(2);
                    return sleep(1000);
                })
                .then(() => {
                    console.log(3);
                    return sleep(1000);
                })
                .then(() => {
                    console.log(4);
                    return sleep(1000);
                })
                .catch((error) => {
                    console.log(error);
                })

        - Method promise:
            + promise.resolve.
                let promise = Promise.resolve();

            + promise.reject.
                let promise = Promise.reject();

            + promise.all.

                let promise1 = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve([1]);
                    }, 2000);
                });

                let promise2 = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve([2, 3]);
                    }, 5000);
                });

                Promise.all([promise1, promise2])
                    .then((result) => {
                        console.log(result);
                    });

Tính năng trong ES6:
    - Let, const.                      => ok
    - Template literal.                => ok
    - Multi-line string.               => ok
    - Arrow function.                  => ok
    - Classes.                         => ok
    - Default parameter values.        => ok
    - Destructuring.
    - Rest parameters.
    - spread.
    - Enhanced object literal.
    - Tagged template literal.
    - Module.                          => ok


    + Var / let,const:
        - Var/ let,const : Khác nhau về Scope, Hosting.
        - Const / var, let : khác nhau về gán lại giá trị.



    + Template literal / multiline string.
        let test = `Template literal ${tmeplate}
        - Multiple string.
        `;


    + Arrow function:
        - Function:
            function sun(a, b) {
                return a + b;
            }

        - Arrow function:
            let sum = (a,b) => a+b;
            let sun = (a, b) => ({a: a, b: b});
            let sun = log => console.log(log);
        
        - Arrow function không coa context - không thể dùng Arrow function làm constructor.
            + Arrow function không có context:
                - Không lỗi:
                    let testCourse = {
                        name: "Javascript",
                        getName: function () {
                            return this.name; => từ khóa (this) là context.
                        }
                    }
                    console.log(testCourse.getName());

                - Có lỗi - trả về object rỗng.
                    let testCourse = {
                        name: "Javascript",
                        getName: () => this
                    }
                    console.log(testCourse.getName());

            + Arrow function không dùng làm constructor:

                - Không có lỗi:
                    let reCourse = function (name, price) {
                        this.name = name;
                        this.price = price;
                    }
                    let js = new reCourse("Javascript", 250);
                    console.log(js.name);

                - Có lỗi: => is not a constructor
                    let reCourse = (name, price) => {
                        this.name = name;
                        this.price = price;
                    }
                    let js = new reCourse("Javascript", 250);
                    console.log(js.name);


    + Classes trong ES6:

        class reCourse {
            constructor(name, price) {
                this.name = name;
                this.price = price;
            }

            getName() {
                return this.name;
            }
        }

        reCourse.prototype.getPrice = function() {
            return this.price;
        }


    + Default parameters:

        function defaultParameters(log = "Gia tri mac dinh!") {
            console.log(log);
        }


    + Enhanced object literal:
        - Định nhĩa key: value cho object.
        - Định nghĩa phương thức cho object.
        - Định nghĩa key cho object dưới dạng biến.

        1) Cách viết 1:

            let names = "Javascript";
            let prices = 250;

            + Before:
                let Course = {
                    name: names,
                    price: prices,

                    getName: function() {
                        return this.names;
                    }
                };

            + After:
                let Course = {
                    names,
                    prices,

                    getName() {
                        return this.name;
                    }
                };

        2) Cách viết thứ 2:
            let fieldName = "names";
            let fieldPrices = "prices";

            let Course = {
                [fieldName]: "Javascript",
                [fieldPrices]: 2500
            };
            console.log(Course);


    + Destructuring:

        - Đối với array:
            let Course = ["Javascript", "PHP", "Ruby"];
            1) Cách 1:
                let [a, b, c] = Course;
                console.log(a, b, c);                   => Javascript PHP Ruby

            2) Cách 2:
                let [a, , c] = Course;
                console.log(a, c);                      => Javascript Ruby

        - Đối với object:
            let Course = {
                names: "Javascript",
                prices: 2500,
                images: "background.jpg"
            };

            let { names, prices } = Course;
            console.log(names, prices, prices00);       => Javascript  2500  error(price00 is not defined).


    + Rest parameters: Lấy ra phần tử còn lại

        - Đối với Array:
            let Course = ["Javascript", "PHP", "Ruby"];
            1) Cách 1:

            let [a, ...rest] = Course;
            console.log(a);                               => Javascript
            console.log(rest);                            =>  ['PHP', 'Ruby']

        - Đối với object:

            let Course = {
                names: "Javascript",
                prices: 2500,
                images: "background.jpg"
            };
            let { names, ...rest } = Course;

            console.log(names);                         => Javascript
            console.log(rest);                          => {prices: 2500, images: 'background.jpg'}

    + Rest dùng chung với function:
        Example 1:
            function logger(...params) {                => typeof(params) == Array parameter.
                console.log(params);                    => [1,2,3,4,5,6,7,8];
            }

            logger(1, 2, 3, 4, 5, 6, 7, 8);
        
        Example 2:
            function logger(a, ...params) {
                console.log(params);                    => [2,3,4,5,6,7,8]
                console.log(a);                         => 1
            }

            logger(1, 2, 3, 4, 5, 6, 7, 8);

        Example 3:

            function logger({name, price, ...rest}) {
                console.log(name, price, rest);
            }

            logger({
                name: "Javascript",
                price: 25000,
                description: "Description content"
            });

        Example 4:

            function logger([a, b, ...rest]) {
                console.log(a, b, rest);
            }

            logger([1, 2, 3, 4, 5, 6, 7]);


    + Destructuring and Rest trong trường hợp Object có Object con:
        Example:

            let Course = {
                names: "Javascript",
                prices: 2500,
                images: "background.jpg",
                children: {
                    names: "reactJs"
                }
            };

            let { names, children } = Course;

            console.log(names);                            => Javascript
            console.log(children);                         => {names: 'reactJs'}

            + Trường hợp 1:
                let { names, children: {names} } = Course;
                console.log(names);                        => reactJs

            + trường hợp 2: khắc phực đổi tên names
                let { names: parentName, children: { names: childrenName } } = Course;
                console.log(parentName);                    => Javascript
                console.log(childrenName);                  => reactJs

                ==> Lúc này nếu dùng lại hai biến names của parent và names của children không còn sử dụng được.

    + Destructuring and rest trong trường hợp lấy biến không có giá trị chúng ta muốn tạo giá trị mặc định

        Example:
            let Course = {
                names: "Javascript",
                prices: 2500,
                images: "background.jpg",
                children: {
                    names: "reactJs"
                }
            };

            let {name, description = "Gia tri mac dinh" } = Course;

            console.log(description);                       => Gia tri mac dinh.


    + Spread trong Javascript: Toán tử giải
        - Nếu đặt (...) trước Array hay Object thì sẽ bỏ đi giấu [] hoặc {} của Array hoặc Object.
        
        Example 1:
            let array1 = ["Javascript", "PHP", "Ruby"];
            let array2 = ["Java", "Dart"];
            let array3 = [...array1, ...array2];

            console.log(array3);                            =>  ['Javascript', 'PHP', 'Ruby', 'Java', 'Dart']


        Example 2:
            let obj1 = {
                name: "Javascript"
            }

            let obj2 = {
                price: 2500
            }

            let obj3 = {
                ...obj1,
                ...obj2
            }

            console.log(obj3);                              => {name: 'Javascript', price: 2500}


    + Tagged template literal:

        function highLine(...rest) {
            console.log(rest);
        }

        let course = "Javascript";
        let className = "F8";

        highLine`Học ${course} tại ${className} `;         => Cái này la cách gọi function   => Kết quả:
                                                           => [Array(3), 'Javascript', 'F8']
                                                           => Array(3) ==> ['Học ', ' tại ', ' ', raw: Array(3)]


    + HTML querySelector:
        let $ = document.querySelector.bind(document);
        let btn = $("#btn-add");

        let $$ = document.querySelectorAll(document);
        let iteam = $$(".list-iteam");

        let elementHTML = document.documentElement;         => return element HTML.

        - Trong HTML:
            <h1 data-key="data-title">Nội dung them vào</h1>

        - Trong JS:
            let getAttributeData = document.getElementsByClassName("h1").dataset.index;
            let getAttributeData = document.getElementsByClassName("h1").getAttribute("data-title");

    + Object:
        - Object.defineProperty()                           => method

    + Event listener: Chưa rõ hoặc chưa chắc cách dùng.
        - ScrollIntoView();
        - ScrollY();
        - ScrollX();
        - CloseSet();

            element.onClick(function(e) {
                e.target.closeSet();
            });
        


--- JAVASCRIPT nâng cao:
    + IIFE (Immediately Invoked Function Expression):
        1) IIFE trông như thế nào?
        2) Dùng dấu ; trước IIFE.
        3) IIFE là hàm private.
        4) Sử dụng IIFE như thế nào.
        5) Cách tạo ra IIFE.
        6) Ví dụ sử dụng IIFE.

        - Example:
            ;(function() {

            })();

        - Example:

            let a = "Test"                                     => Lỗi

            ;(function() {                                     => khắc phục thêm ; trước IIFE

            })()

        - Exmaple:

            let app = (function() {
                const cars = [];                              => app không thể truy cập vào cars vì cars thuộc phạm vi của IIFE
                return { 
                    getCar() {
                        return cars;
                    },
                    add(car) {
                        cars.push(car);
                    },
                    edit(car, index) {
                        cars[index] = car;
                    },
                    delete(index) {
                        cars.splice(index, 1);
                    }
                }
            })();

            app.add("BMW");                                  => app có thể truy cập vào phương thức được return về từ IIFE


    + Scope: Phạm vi truy cập
        1) Global (Phạm vi toàn cục)
        2) Lode block ({} (Khối mã)/ let/const)
        3) Local scope (Hàm var/ function)
        
        - Khi gọi mỗi hàm luôn có một phạm vi mới được tạo ra.
        - Các hàm có thể truy cập các biến được khai báo trong pham vi và bên ngoài nó.
        - Cách thức một biến được truy cập.                  => Luôn lấy biến được khai báo gần nhất với chỗ gọi giá trị.
        - Khi nào một biến được xóa khỏi bộ nhớ?
            + Biến toàn cục.                                 => Bị xóa khi tắt chương trình.
            + Biến trong code block/ function.               => khi thoát khỏi block/ function hệ thống sẽ tự xóa biến khỏi bộ nhớ.
            + Biến trong hàm được tham chiêu bởi một hàm.    => 


                function couters() {
                    let count = 0;

                    function inCrease() {
                        return ++count;
                    }

                    return inCrease;
                }

                let team = couters();

                - Biến team sẽ giữ giá trị của couters() trả về là inCrease().
                - Function inCreate() không trực tiếp tạo biến count nên dùng biến count ở phạm vi lớn hơn.
                - Sau khi function inCrease() trả về kết quả biến count vẫn chưa được xóa khỏi bộ nhớ.

    + Closure: Tính kép kính/ Tính bao dóng của function
        1) Closure là gì:
            - là một hàm có thể ghi nhớ nơi nó được tạo ra và truy cập được ở biến bên ngoài phạm vi.

        2) Ứng dụng:
            - Viết code ngắn gọn hơn.
            - Biễu diễn/ ứng dụng tính private trong OOP.

        3) Tóm tắt:
        
        3) Lưu ý:
            - Biến được tham chiếu (refer) sẽ không được xóa khỏi bộ nhớ khi hàm cha được thực thi xong.
            - Các khái niệm Javascript nâng cao rất dễ gây nhầm lẫn.


        Example 1: 
            function logger() {
                let couter = 0;
                function inCreaste() {
                    return ++couter;
                }

                return inCreaste;
            }

            let inCreaste1 = logger();                                  => Phạm vi Fn logger được tạo ra. biến couter được tạo.
            console.log(inCreaste1());                                  => Phạm vì Fn inCreaste được tạo ra. value = 1
            console.log(inCreaste1());                                  => Phạm vì Fn inCreaste được tạo ra. value = 2
            console.log(inCreaste1());                                  => Phạm vì Fn inCreaste được tạo ra. value = 3

            => Tổng cộng có 4 phạm vi được tạo ra.


        Example 2:
            function createStorage(key) {
                let storage = JSON.parse(localStorage.getItem(key)) ?? {};

                let save = () => {
                    localStorage.setItem(key, JSON.stringify(storage));
                }

                return {
                    get: () => {
                        return storage;
                    },
                    save: (key, value) => {
                        storage[key] = value;
                        save();
                    },
                    delete: (key) => {
                        delete storage[key];
                        save();
                    }
                }
            }

            // main.js
            let courses = createStorage("Course");
            courses.save("Javascript", "Nội dung bài học Javascript");
            courses.save("PHP", "Nội dung bài học PHP");
            courses.save("Java", "Nội dung bài học Java");
            console.log(courses.get("Course"));


    + Hoisting: Đưa lên trên.
        - Trong Javascript việc khai báo biến/ function điều được hỗ trợ hoisting nhưng có sự khác nhau giữa chúng.

        Example 1: khai báo biến với var có hỗ trợ hoisting.

            console.log(age);                                  => undefined. hoisting chỉ đưa tên biến lên đầu không kèm giá trị.
            console.log(fullName);                             => fullName is not defined.

            var age = 16;

        
        Example 2: khai báo function delaration có hỗ trợ hoisting.

            console.log(sum(5, 6));                           => function declaration hỗ trợ hoisting.

            function sum(a, b) {
                return a + b;
            }

        Example 3:

            {
                console.log(fullName);                        => Cannot access 'fullName' before initialization.
                let fullName = "Nguyen Hoang";
            }

        - Nguyên nhân:
            - Khai báo biến với từ khóa "let"/ "const" khi được hoisted sẽ
            không được tạo giá trị và đưa vào "Temporal dead zone".

            - "let"/ "const" được hoisted lên nhưng không mang giá trị mật định undefined như "var" mà sẽ nằm ở vùng
            không truy cập được.

        - Mục đích của việc hoisting:
            - Do mỗi biến được khai báo luôn nằm trong một phạm vi nhất định, khi dùng gọi một biến trước khi biến đó được khai
            báo để tránh đảm bảo việc biến đó luôn lấy trong phạm vi gần nhất thì sẽ dùng đến hoisting.

            VD:

                {
                    let userName = "Nguyen Van A";
                    {
                        console.log(userName);                          => userName không truy câp biến bên ngoài.
                        let userName = "Nguyen Van B";                  => để đảm bảo userName trong log luôn là biến gần nhất
                    }                                                   thì việc hoisting sẽ giải quyết được vấn đề đó.
                }


    + Strict mode: Chế độ nghiêm ngặt
        - Luôn đứng vị trí đầu tiên trong phạm vi. Thông báo pham vi sử dụng chế độ strict mode.

            + Thêm "use strict"; đứng đầu file.
            + Thêm "use strict"; vào ngay đầu thẻ mở <script>.
            + Thêm "use strict"; vào đầu mỗi function.

    + Primitive type and reference type: kiểu tham trị và kiểu tham chiếu trong Javascript.
        - Value type:
            + String
            + Number
            + Boolean
            + Bigint
            + Null
            + Undefined
            + Symbol

        + Reference type:
            + object
            + Array
            + Function

    + This:
        - Từ khó "this" trong Javascript đề cập đến đối tượng mà nó thuộc về.
        - Đặc tính:
            + Trong một phương thức, "this" tham chiếu đến đối tượng truy cập phương thức.
            + Đứng ngoài phương thức "this" tham chiếu đến đối tượng global.

        - Lưu ý:
            + "this" trong hàm đại diện cho đối tượng được tạo.
            + "this" trong hàm là undefine khi ở "strict mode".
            + Các phương thức bind(), call() và apply() có thể tham chiếu "this" tới các đối tượng khác.
            + Arrow function không có context nên không có "this". Nó sẽ lấy "this" trong phạm vi gần nó nhất.

        
        Example:

            function car(name) = {
                this.name = name;
            }

            car.prototype.run = function() {
                // this (this tại vị trí này là this của đối tượng car).


                // Trường hợp 1:
                function test() {
                    return this; // this ở đây là đối tượng global (window).
                }

                // Trường hợp 2:
                test1 = () => {
                    return this; // this ở đây được lấy từ phạm vi bên ngoài gần nhất tức đối tượng car.
                }
            }

        Example 2:
            firstName = "Thu";
            lastName = "Minh";

            const teacher = {
                firstName: "Thao",
                lastName: "Minh",

                getFullName() {
                    return `${this.firstName} ${this.lastName}`;
                }

            }

            // Case 1:
            console.log(teacher.getFullName());         => "this" nhận giá trị từ object.
            ==> value = "Thao minh"

            //Case 2:
            const getTeacherName = teacher.getFullName;
            console.log(getTeacherName());              => lúc này "this" trong phương thức getFullName() sẽ nhận giá trị global
            ==> value = "Thu minh"
        
    + Function.bind(): Fn.bind() gàn buộc.
        - Đặc tính:
            + Phương thức bind() sẽ trả về một hàm mới.
            + Có thể nhận các đối số như hàm ban đầu.


        Example:
            firstName = "Thu";
            lastName = "Minh";

            const teacher = {
                firstName: "Thao",
                lastName: "Minh",

                getFullName() {
                    return `${this.firstName} ${this.lastName}`;
                }

            }

            Case 1:
                console.log(teacher.getFullName());     => "this" nhận giá trị từ object.
                    ==> value = "Thao minh"

            Case 2:
                const getTeacherName = teacher.getFullName;
                console.log(getTeacherName());          => lúc này "this" trong phương thức getFullName() sẽ nhận giá trị global
                    ==> value = "Thu minh"

            Case 3: cách khắc phục
                const getTeacherName = teacher.getFullName.bind(teacher);
                console.log(getTeacherName());
                ==> value = "Thao minh"


        + Lưu ý:
            .bind(object, parameter_01, parameter_02, parameter_03):

            - Sẽ dựa vào đối tượng object truyền vào cho bind() tù khóa "this" sẽ được chỉ định là đối tượng được đưa vào
            trong .bind().

            - Khi một phương thức được khai báo trong một object, nếu lấy phương thức đó gán lại cho một biến thì khi lấy biến đó gọi hàm thì từ khóa "this" bên trong phương thức đó sẽ chỉ đến đối tượng global.

            - Phương thức bind() nhận 2 đối số:
                1) Object bạn muốn gàn buộc.
                2) những parameter được truyền vào trong phương thức. nếu truyền đối số vào bind() và trong function() khi gọi hàm sẽ ưu tiến lấy đối số từ bind() method.

            + Phương thức bind() cho phép ràng buộc this cho một phương thức (function).
            + Phương thức bind() sẽ trả về hàm mới với context được bind.
            + Hàm được trả về từ bind() vẫn nhận đối số như hàm gốc.

    + Function.call(): Fn.call()
        - CALL() là một phương thức dùng để gọi hàm.
        - Là phương thức trong prototype của Function constructor, phương thức này được dùng để gọi hàm và cũng có thể bind "this" cho ham.

        - Gọi hàm với call method().
        - Gọi hàm và bind "this", lưu ý trong strict mode vẫn có "this" nếu được bind.
        - Thể hiện tính kế thừa (extends) trong OOP.
        - Mượn hàm (Function borrowing), thêm ví dụ với arguments.

        Example: Gọi hàm với call method().
            const teacher = {
                firstName: "Thu",
                lastName: "Minh"
            }

            const me = {
                firstName: "Dang",
                lastName: "Son",
                showInfo() {
                    console.log(`${this.firstName} ${this.lastName}`);
                }
            }

            me.showInfo.call(teacher);                                          => kỹ thuật mượn hàm (Function borrowing).


        Example: Thể hiện tính kế thừa (extends) trong OOP.
            function Animal(name, weight) {
                this.name = name;
                this.weight = weight;
            }

            function chicken(name, weight, legs) {
                Animal.call(this, name, weight);
                this.legs = legs;
            }

            let duyNguyen = new chicken("DuyNguyen", 50, 2);
            console.log(duyNguyen);

        Example: Function borrowing:
            function logger() {
                console.log(arguments);

                Array.prototype.forEach.call(arguments, (e) => {
                    console.log(e);
                });
            }

            logger(1, 2, 3, 4, 5);
            


    + Function.apply(): Fn.apply()
    - Apply ngoài đối số "this" đối số thứ 2 của apply là một mảng
        
        Example:
            function logger() {
                console.log(arguments);

                Array.prototype.forEach.call(arguments, (e) => {
                    console.log(e);
                });
            }

            logger(1, 2, 3, 4, 5);


        Example:
            function Animal(name, weight) {
                this.name = name;
                this.weight = weight;
            }

            function Chicken() {
                Animal.apply(this, arguments);
                this.legs = 2;
            }

            let ga = new Chicken("Tam hoang", 45);
            console.log(ga);


    + Sự giống nhau của ba phương thức Bind()/ Call()/ Apply().

        + Điều là phương thức có thể truy cập thông qua phương thức để gọi.

            function fn() {}

            fn.bind();
            fn.call();
            fn.apply();

        + Là phương thức được kế thừa từ Function.prototype

        fn.bind === Function.bind       => true
        fn.call === Function.call       => true
        fn.apply === Function.apply     => true

    
    + Sự khác nhau của ba phương thức Bind()/ Call()/ Apply().
        
        + Các đối số và cách hoạt động.
        1) Bind() method.
            - Trả ra hàm mới với "this" tham chiếu đến thisArg.
            - Không thực hiện gọi hàm.
            - Nếu được bind kèm `arg1, arg2, ...` thì các đối số này được ưu tiên hơn.

            const newFn = fn.bind(thisArg, arg1, arg2, ....);
            newFn(arg1, arg2, ...);

        
        2) Call() method.
            - Thực hiện bind với this và thisArg và thực hiện gọi hàm.
            - Nhận các đối số cho hàm gôc từ arg1, arg2, ...

            fn.call(thisArg, arg1, arg2, ...);

        3) Apply() method:
            - Thực hiện bind với this và thisArg và thực hiện gọi hàm.
            - Nhận các đối số cho hàm gốc bằng đối số thứ 2 dưới dạng mảng [arg1, arg2, arg2, ...].

            fn.apply(thisArg, [arg1, arg2, ...]);

 -->

 