import React from "react";
import Hero from "../../components/Hero";
import mission from "../../assets/mission.jpg";
import exam_blue from "../../assets/exam_blue.png";
import maneuver_blue from "../../assets/maneuver_blue.png";
import license_blue from "../../assets/license_blue.png";
import balemo from "../../assets/balemo.png";
import blob_1 from "../../assets/blob_1.png";
import blob_2 from "../../assets/blob_2.png";
import blob_3 from "../../assets/blob_3.png";
import course from "../../assets/course.png";
import driving from "../../assets/driving.png";
import exam2 from "../../assets/exam2.png";
import facebook from "../../assets/facebook.png";
import gmail from "../../assets/gmail.png";
import location from "../../assets/location.png";
import phone from "../../assets/phone.png";
import "./HomePage.css";
type Props = {};
const HomePage = (props: Props) => {
  return (
    <div>
      <Hero />

      <section className="mt-48 mb-48 flex justify-center">
        <div className="grid grid-cols-2 gap-5 items-center max-w-[1800px]">
          <div className="flex flex-col items-center">
            <h3 className="font-karla text-mission font-extrabold text-4xl w-[550px] text-center shadow-header">
              Ośrodek Szkolenia Kierowców PULS Sławomir Piaskowy
            </h3>
            <p className="font-karla text-3xl font-bold w-[550px] mt-5 text-justify">
              Jesteśmy ceniona szkoła jazdy w rejonie Limanowej. Specjalizujemy
              się w kompleksowym i profesjonalnym przygotowaniu kandydatów do
              egzaminów na prawo jazdy. Pan Sławomir z pasją przekazuje zarówno
              wiedzę teoretyczną, jak i praktyczną, co gwarantuje wysoki poziom
              zdawalności naszych kursantów.
            </p>
          </div>

          <div className="flex justify-center w-full">
            <div className="w-[800px]">
              <img
                src={mission}
                alt="mission"
                className="w-full h-[700px] object-cover rounded-[50px] drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center">
        <div className="w-full max-w-[1800px]">
          <h1 className="font-karla font-bold uppercase text-5xl shadow-header mb-10 text-center">
            egzamin
          </h1>
          <div className="grid grid-cols-3 gap-10">
            <div className="w-full card-background rounded-3xl flex flex-col items-center shadow-md">
              <div className="w-[250px] h-[250px] rounded-full bg-white flex justify-center items-center mt-14">
                <img
                  src={exam_blue}
                  alt="exam"
                  className="w-[145px] h-[145px]"
                />
              </div>

              <h1 className="uppercase text-white text-4xl font-extrabold font-karla mt-8">
                egzamin teoretyczny
              </h1>
              <p className="w-[420px] text-xl font-karla font-extrabold text-white text-center mt-8 mb-16">
                Test komputerowy składający się z 32 pytań, obejmujących
                przepisy ruchu drogowego i zasady bezpieczeństwa. Należy uzyskać
                co najmniej 68 punktów na 74 możliwe. Kandydaci mają 25 minut na
                ukończenie testu.
              </p>
            </div>

            <div className="w-full card-background rounded-3xl flex flex-col items-center shadow-md">
              <div className="w-[250px] h-[250px] rounded-full bg-white flex justify-center items-center mt-14">
                <img
                  src={maneuver_blue}
                  alt="exam"
                  className="w-[145px] h-[145px]"
                />
              </div>

              <h1 className="uppercase text-white text-4xl font-extrabold font-karla mt-8">
                PLAC MANEWROWY
              </h1>
              <p className="w-[420px] text-xl font-karla font-extrabold text-white text-center mt-8 mb-16">
                Polega na wykonaniu zadań, takich jak jazda po łuku oraz
                ruszanie ze wzniesienia. Poprawne wykonanie wszystkich zadań na
                placu manewrowym jest warunkiem przystąpienia do dalszej części
                egzaminu praktycznego.
              </p>
            </div>

            <div className="w-full card-background rounded-3xl flex flex-col items-center shadow-md">
              <div className="w-[250px] h-[250px] rounded-full bg-white flex justify-center items-center mt-14">
                <img
                  src={license_blue}
                  alt="exam"
                  className="w-[145px] h-[145px]"
                />
              </div>

              <h1 className="uppercase text-white text-4xl font-extrabold font-karla mt-8">
                EGZAMIN PRAKTYCZNY
              </h1>
              <p className="w-[420px] text-xl font-karla font-extrabold text-white text-center mt-8 mb-16">
                Sprawdza umiejętności bezpiecznego prowadzenia pojazdu w ruchu
                miejskim. Egzaminator ocenia przestrzeganie przepisów,
                zachowanie wobec innych uczestników ruchu i reakcje na różne
                sytuacje drogowe.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center mt-52">
        <div className="max-w-[1600px] w-full">
          <h1 className="font-karla text-5xl font-bold shadow-header text-center">
            NASZE SAMOCHODY DO NAUKI JAZDY
          </h1>
          <div className="grid grid-cols-2 gap-[150px] mt-10">
            <div>
              <img
                src={balemo}
                alt="Suzuki Balemo"
                className="w-full rounded-3xl shadow-lg"
              />
              <h2 className="text-3xl font-bold font-karla shadow-header text-center mt-3">
                Suzuki Balemo
              </h2>
            </div>

            <div>
              <img
                src={balemo}
                alt="Skoda Fabia II"
                className="w-full rounded-3xl shadow-lg"
              />
              <h2 className="text-3xl font-bold font-karla shadow-header text-center mt-3">
                Skoda Fabia II
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center relative mt-44">
        <img
          src={blob_1}
          alt="blob 1"
          className="absolute z-[-1] left-[-300px] top-[-120px] rotate-180 drop-shadow-xl"
        />
        <img
          src={course}
          alt="course"
          className="absolute z-[-1] left-[150px] top-[250px] w-[300px] h-[300px]"
        />
        <img
          src={blob_2}
          alt="blob 2"
          className="absolute z-[-1] right-[-200px] top-[300px] rotate-[-20deg] drop-shadow-xl"
        />
        <img
          src={driving}
          alt="driving"
          className="absolute z-[-1] right-[120px] top-[730px] w-[400px]"
        />
        <img
          src={blob_3}
          alt="blob 3"
          className="absolute z-[-1] left-[-300px] top-[820px] rotate-[120deg] drop-shadow-xl"
        />
        <img
          src={exam2}
          alt="exam 2"
          className="absolute z-[-1] left-[100px] top-[1120px] w-[350px] drop-shadow-xl"
        />
        <div className="w-full max-w-[1700px] flex flex-col items-center">
          <h1 className="font-kanit text-title uppercase font-extrabold text-6xl mt-24 text-center shadow-header">
            przebieg szkolenia
          </h1>

          <div className="flex flex-col gap-[150px] mt-24 max-w-[650px] w-full">
            <div className="self-end">
              <h2 className="uppercase text-[#2395E9] text-5xl font-bold font-kanit shadow-header">
                KURS TEORETYCZNY
              </h2>
              <p className="font-karla font-bold text-2xl w-[450px]">
                Szkolenie na prawo jazdy w Polsce zaczyna się od 30 godzin
                lekcyjnych kursu teoretycznego. Kursanci uczą się przepisów
                ruchu drogowego, zasad bezpieczeństwa oraz pierwszej pomocy,
                kończąc kurs wewnętrznym egzaminem.
              </p>
            </div>

            <div>
              <h2 className="uppercase text-[#2395E9] text-5xl font-bold font-kanit shadow-header">
                JAZDY PRAKTYCZNE
              </h2>
              <p className="font-karla font-bold text-2xl  w-[450px]">
                Po teorii kursanci przechodzą do 30 godzin zegarowych jazd
                praktycznych. Uczą się manewrów na placu, takich jak ruszanie ze
                wzniesienia, jazda po łuku i parkowanie, oraz jazdy w ruchu
                miejskim, stosując przepisy w praktyce.
              </p>
            </div>

            <div className="self-end">
              <h2 className="uppercase text-[#2395E9] text-5xl font-bold font-kanit shadow-header">
                EGZAMINY PAŃSTWOWE
              </h2>
              <p className="font-karla font-bold text-2xl  w-[450px]">
                Szkolenie kończy się egzaminami państwowymi w WORD. Najpierw
                zdają egzamin teoretyczny, a po jego zaliczeniu przystępują do
                egzaminu praktycznego, który obejmuje manewry na placu i jazdę w
                ruchu miejskim. Zdanie obu egzaminów jest niezbędne do uzyskania
                prawa jazdy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center mt-96 mb-48">
        <div className="w-full max-w-[1400px]">
          <h1 className="text-5xl font-extrabold shadow-header uppercase font-karla text-center">
            Kontakt
          </h1>
          <div className="grid grid-cols-2 mt-20">
            <form className="flex flex-col">
              <input
                type="text"
                placeholder="Imię i nazwisko"
                className="mt-5 placeholder-[#6D6D6D] font-karla font-medium bg-[#F4F4F4] border-2 border-[#C7C7C7] pl-5 py-4 rounded-lg max-w-[500px]"
              />
              <input
                type="text"
                placeholder="E-mail"
                className="mt-5 placeholder-[#6D6D6D] font-karla font-medium bg-[#F4F4F4] border-2 border-[#C7C7C7] pl-5 py-4 rounded-lg max-w-[500px]"
              />
              <input
                type="text"
                placeholder="Numer telefonu"
                className="mt-5 placeholder-[#6D6D6D] font-karla font-medium bg-[#F4F4F4] border-2 border-[#C7C7C7] pl-5 py-4 rounded-lg max-w-[500px]"
              />
              <textarea
                placeholder="Tekst wiadomości"
                className="mt-5 placeholder-[#6D6D6D] font-karla font-medium bg-[#F4F4F4] border-2 border-[#C7C7C7] pl-5 py-4 rounded-lg max-w-[500px] h-[150px]"
              />

              <button className="bg-green-400 py-5 max-w-[250px] mt-8 text-white font-karla uppercase font-extrabold rounded-xl">
                Wyślij
              </button>
            </form>

            <div className="flex gap-10 flex-col justify-center">
              <div className="flex items-center gap-5">
                <img
                  src={facebook}
                  alt="facebook"
                  className="w-[100px] h-[100px]"
                />
                <h2 className="font-karla font-bold text-2xl">
                  https://www.facebook.com/oskpuls/{" "}
                </h2>
              </div>

              <div className="flex items-center gap-5">
                <img src={gmail} alt="gmail" className="w-[100px] h-[100px]" />
                <h2 className="font-karla font-bold text-2xl">werwa6@wp.pl</h2>
              </div>

              <div className="flex items-center gap-5">
                <img
                  src={location}
                  alt="location"
                  className="w-[100px] h-[100px]"
                />
                <h2 className="font-karla font-bold text-2xl">
                  Stara wieś 404
                </h2>
              </div>

              <div className="flex items-center gap-5">
                <img src={phone} alt="phone" className="w-[100px] h-[100px]" />
                <h2 className="font-karla font-bold text-2xl">600 142 105</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
