function save_cert() {
  let toc = document.getElementById("toc_t").value;
  let wt = document.getElementById("wt_t").value;
  let mc = document.getElementById("mc_t").value;
  let mp = document.getElementById("mp_t").value;
  let dt = document.getElementById("dt_t").value;
  let p1 = document.getElementById("p1").value;
  let p2 = document.getElementById("p2").value;
  let p3 = document.getElementById("p3").value;

  document.getElementById("toc_tm").innerHTML = toc;
  document.getElementById("wt_tm").innerHTML = wt;
  document.getElementById("mc_tm").innerHTML = mc;
  document.getElementById("mp_tm").innerHTML = mp;
  document.getElementById("dt_tm").innerHTML = dt;
  document.getElementById("p1_tm").innerHTML = p1;
  document.getElementById("p2_tm").innerHTML = p2;
  document.getElementById("p3_tm").innerHTML = p3;

  document.getElementById("toc_t").parentElement.innerHTML = toc;
  document.getElementById("wt_t").parentElement.innerHTML = wt;
  document.getElementById("mc_t").parentElement.innerHTML = mc;
  document.getElementById("mp_t").parentElement.innerHTML = mp;
  document.getElementById("dt_t").parentElement.innerHTML = dt;
  document.getElementById("p1").parentElement.innerHTML = p1;
  document.getElementById("p2").parentElement.innerHTML = p2;
  document.getElementById("p3").parentElement.innerHTML = p3;

  document.getElementById("toc_iw").innerHTML = numberToWords.toWords(toc);
  document.getElementById("wt_iw").innerHTML = numberToWords.toWords(wt);
  document.getElementById("mc_iw").innerHTML = numberToWords.toWords(mc);
  document.getElementById("mp_iw").innerHTML = numberToWords.toWords(mp);
  document.getElementById("dt_iw").innerHTML = numberToWords.toWords(dt);
  document.getElementById("p1_iw").innerHTML = numberToWords.toWords(p1);
  document.getElementById("p2_iw").innerHTML = numberToWords.toWords(p2);
  document.getElementById("p3_iw").innerHTML = numberToWords.toWords(p3);

  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.style.display = "none";
  });

  let total =
    Number(toc) +
    Number(wt) +
    Number(mc) +
    Number(mc) +
    Number(mp) +
    Number(dt) +
    Number(p1) +
    Number(p2) +
    Number(p3);

  document.getElementById("tot_marks").innerHTML = total;

  document.getElementById("tot_iw").innerHTML = numberToWords.toWords(total);
  document.getElementById("form-data").remove();
}
