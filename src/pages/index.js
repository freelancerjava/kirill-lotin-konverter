import React, { useState } from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import pic8 from '../assets/images/pic08.jpg';
import Scroll from '../components/Scroll';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

var a = {
  "Ё": "YO", "Й": "Y", "Ц": "TS",
  "У": "U", "К": "K", "Е": "E",
  "Н": "N", "Г": "G", "Ш": "SH",
  "Щ": "SCH", "З": "Z", "Х": "H",
  "Ъ": "'", "ё": "yo", "й": "y",
  "ц": "ts", "у": "u", "к": "k",
  "е": "e", "н": "n", "г": "g",
  "ш": "sh", "щ": "sch", "з": "z",
  "х": "x", "ъ": "'", "Ф": "F",
  "Ы": "I", "В": "V", "А": "A",
  "П": "P", "Р": "R", "О": "O",
  "Л": "L", "Д": "D", "Ж": "J",
  "Э": "E", "ф": "f", "ы": "i",
  "в": "v", "а": "a", "п": "p",
  "р": "r", "о": "o", "л": "l",
  "д": "d", "ж": "j", "э": "e",
  "Я": "Ya", "Ч": "CH", "С": "S",
  "М": "M", "И": "I", "Т": "T",
  "Ь": "'", "Б": "B", "Ю": "YU",
  "я": "ya", "ч": "ch", "с": "s",
  "м": "m", "и": "i", "т": "t",
  "ь": "'", "б": "b", "ю": "yu",
  " е": "ye",
  "ў": "o'",
  "қ": "q",
  "ғ": "g'",
  "ҳ": "h",
  "Ў": "O'",
  "Қ": "Q",
  "Ғ": "G'",
  "Ҳ": "H",

};

function transliterate(word) {
  return word.split('').map(function (char, key) {
    if(char==='е' && (key == 0 || word[key-1]===' ')) return 'ye'
    return a[char] || char;
  }).join("");
}
// function transliterate(word) {
//   var answer = ""
//     , a = {};

//   a["Ё"] = "YO"; a["Й"] = "Y"; a["Ц"] = "TS"; a["У"] = "U"; a["К"] = "K"; a["Е"] = "E"; a["Н"] = "N"; a["Г"] = "G"; a["Ш"] = "SH"; a["Щ"] = "SCH"; a["З"] = "Z"; a["Х"] = "H"; a["Ъ"] = "'";
//   a["ё"] = "yo"; a["й"] = "y"; a["ц"] = "ts"; a["у"] = "u"; a["к"] = "k"; a["е"] = "e"; a["н"] = "n"; a["г"] = "g"; a["ш"] = "sh"; a["щ"] = "sch"; a["з"] = "z"; a["х"] = "h"; a["ъ"] = "'";
//   a["Ф"] = "F"; a["Ы"] = "I"; a["В"] = "V"; a["А"] = "a"; a["П"] = "P"; a["Р"] = "R"; a["О"] = "O"; a["Л"] = "L"; a["Д"] = "D"; a["Ж"] = "ZH"; a["Э"] = "E";
//   a["ф"] = "f"; a["ы"] = "i"; a["в"] = "v"; a["а"] = "a"; a["п"] = "p"; a["р"] = "r"; a["о"] = "o"; a["л"] = "l"; a["д"] = "d"; a["ж"] = "zh"; a["э"] = "e";
//   a["Я"] = "Ya"; a["Ч"] = "CH"; a["С"] = "S"; a["М"] = "M"; a["И"] = "I"; a["Т"] = "T"; a["Ь"] = "'"; a["Б"] = "B"; a["Ю"] = "YU";
//   a["я"] = "ya"; a["ч"] = "ch"; a["с"] = "s"; a["м"] = "m"; a["и"] = "i"; a["т"] = "t"; a["ь"] = "'"; a["б"] = "b"; a["ю"] = "yu";

// a["ў"] = "o'"; a["қ"] = "q"; a["ғ"] = "g'"; a["ҳ"] = "h";
// a["Ў"] = "O'"; a["Қ"] = "Q"; a["Ғ"] = "G'"; a["Ҳ"] = "H";

//   a[" е"] = "ye";



//   for (let i in word) {
//     if (word.hasOwnProperty(i)) {
//       if (a[word[i]] === undefined) {
//         answer += word[i];
//       } else {
//         answer += a[word[i]];
//       }
//     }
//   }
//   return answer;
// }

const IndexPage = () => {

  const [data, setdata] = useState({ text: "", result: "" });

  const handleChangeText = (val) => {
    setdata({
      text: val,
      result: transliterate(val)
    })
  }

  return (
    <Layout>
      <SideBar sections={sections} />

      <div id="main">
        <section id="top" className="one dark cover">
          <div className="container">
            <header>
              <h2 className="alt">
                Hi! I'm <strong>Anubhav</strong>
                <br />
              Web developer
            </h2>
              <p>I have made few things check it out.</p>
            </header>

            <form method="post" action="#">
              <div className="row">
                <div className="col-6 col-12-mobile">
                  <textarea
                    name="cyrillic"
                    placeholder="Kiril alifbosidagi matn uchun joy"
                    onChange={(e) => {
                      handleChangeText(e.target.value)
                    }}
                    value={data.text}
                  />

                </div>
                <div className="col-6 col-12-mobile">
                  <textarea
                    name="latin"
                    placeholder="Lotin alifbosidagi chiquvchi matn uchun joy"
                    value={data.result} />
                </div>
              </div>
            </form>

            <footer>
              {/* <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Show me
              </a>
            </Scroll> */}
            </footer>
          </div>
        </section>

        <section id="portfolio" className="two">
          <div className="container">
            <header>
              <h2>Portfolio</h2>
            </header>

            <p>
              Life will feel it is always a great need for eu valley, the valley
              CNN ridiculous smile at any time chat mainstream clinical homes.
              Mauris floor was very warm and we need it. One customer now nibh
              Bureau dark pools behavior.
          </p>

            <div className="row">
              <div className="col-4 col-12-mobile">
                <article className="item">
                  <a href="/#" className="image fit">
                    <img src={pic2} alt="" />
                  </a>
                  <header>
                    <h3>Ipsum Feugiat</h3>
                  </header>
                </article>
                <article className="item">
                  <a href="/#" className="image fit">
                    <img src={pic3} alt="" />
                  </a>
                  <header>
                    <h3>Rhoncus Semper</h3>
                  </header>
                </article>
              </div>
              <div className="col-4 col-12-mobile">
                <article className="item">
                  <a href="/#" className="image fit">
                    <img src={pic4} alt="" />
                  </a>
                  <header>
                    <h3>Magna Nullam</h3>
                  </header>
                </article>
                <article className="item">
                  <a href="/#" className="image fit">
                    <img src={pic5} alt="" />
                  </a>
                  <header>
                    <h3>Natoque Vitae</h3>
                  </header>
                </article>
              </div>
              <div className="col-4 col-12-mobile">
                <article className="item">
                  <a href="/#" className="image fit">
                    <img src={pic6} alt="" />
                  </a>
                  <header>
                    <h3>Dolor Penatibus</h3>
                  </header>
                </article>
                <article className="item">
                  <a href="/#" className="image fit">
                    <img src={pic7} alt="" />
                  </a>
                  <header>
                    <h3>Orci Convallis</h3>
                  </header>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="three">
          <div className="container">
            <header>
              <h2>About Me</h2>
            </header>

            <a href="/#" className="image featured">
              <img src={pic8} alt="" />
            </a>

            <p>
              Developers football competition in diameter big price to layer the
              pot. Chavez ultricies care who wants to CNN. Lobortis elementum
              aliquet eget a den of which they do not hold it in hatred developers
              nor the mountains of the deposit slip. The element of time, sem ante
              ullamcorper dolor nulla quam placerat viverra environment is not
              with our customers. Free makeup and skirt until the mouse or
              partners or to decorate each targeted.
          </p>
          </div>
        </section>

        <section id="contact" className="four">
          <div className="container">
            <header>
              <h2>Contact</h2>
            </header>

            <p>
              The element of time, sem ante ullamcorper dolor nulla quam placerat
              viverra environment is not with our customers. Free makeup and skirt
              until the mouse. Japan this innovative and ultricies carton salad
              clinical ridiculous now passes from enhanced. Mauris pot innovative
              care for my pain.
          </p>

            <form method="post" action="#">
              <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
                <div className="col-12">
                  <textarea name="message" placeholder="Message" />
                </div>
                <div className="col-12">
                  <input type="submit" value="Send Message" />
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>

      <PageFooter />
    </Layout>
  )
};

export default IndexPage;
