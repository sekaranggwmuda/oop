class Rekening{
    #saldo = 0;
    setor(jumlah){
        if(jumlah > 0){
            this.#saldo += jumlah;
            console.log("setor berhasil")
        }else{
            console.log("kalo miskin gausah setor mas")
        }
    }

    lihatSaldo() {
        return this.#saldo;
    }

    tarik(jumlah){
        if(jumlah > 0 && jumlah <= this.#saldo){
            
        }
    }
}

const rekening = new Rekening();
if(rekening.setor < 25000);
     console.log("halah miskin sulit susah ripuh busung lapar homeless gonore sifilis hiv aids rumah kardus luntang lantung dijalan");
 rekening.setor(12000);
 console.log(rekening.lihatSaldo());
