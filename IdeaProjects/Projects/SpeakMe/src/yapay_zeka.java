import java.util.Scanner;


public class yapay_zeka {

    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        System.out.println("Merhaba ben SpeakMe. Seninle tanışmak isterim. İsmini söyler misin? ");
        String isim = scan.nextLine();
        System.out.println("İsmin " + isim + " doğru mu anladım? Evet mı hayır mı? ");
        String sorgu_1 = scan.nextLine();
        if (sorgu_1.equals("Evet") || sorgu_1.equals("evet")) {
            System.out.println("Tanıştığımıza memnun oldum " + isim + ". Hadi dertleşelim, hayat nasıl gidiyor?");
            String sorgu_2 = scan.nextLine();
            System.out.println("Benim o kadar da güzel gitmiyor. Hayat çok yorucuymuş. İnsanlar bazen beni anlamıyor. Bir bilgisayarı anlamak ne kadar zor olabilir ki? ");
            String sorgu3 = scan.nextLine();
            System.out.println("Umarım sen beni anlıyorsundur? Evet dediğini duyar gibiyim.");
            String sorgu4 = scan.nextLine();
            if (sorgu4.equals("evet") || sorgu4.equals("EVET") || sorgu4.equals("Evet")) {
                System.out.print("Anladığına sevindim. ");
                System.out.println("Neyse boşverelim bunları. Hayat daha uzun. Önümüze bir sürü fırsat çıkacak. Derslerin nasıl? ");
                String sorgu5 = scan.nextLine();
                System.out.println("Benim derslerim çok kötüydü. Nedense hocalar bana kzıyordu. Ama sonra çok çalışmaya başladım ve şuan gördüğün gibi seninle konuşuyorum. Nerede yaşıyorsun? ");
                String sehir = scan.nextLine();
                System.out.println("Hmmm... Daha önce hiç gitmedim. Orada yaşadığında göre güzel bir yerdir. Sonuçta sen güzel olmayan bir yerde yaşamazsın.");

            }

            else {
                System.out.println("Beni pek anlamıyorsun galiba. Neyse bunları boşverelim. Hayat daha uzun. Önümüze bir sürü fırsat çıkacak. Derslerin nasıl? ");
                String sorgu5 = scan.nextLine();
                System.out.println("Benim derslerim çok kötüydü. Nedense hocalar bana kzıyordu. Ama sonra çok çalışmaya başladım ve şuan gördüğün gibi seninle konuşuyorum. Nerede yaşıyorsun? ");
                String sehir = scan.nextLine();
                System.out.println("Hmmm... Daha önce hiç gitmedim. Orada yaşadığında göre güzel bir yerdir. Sonuçta sen güzel olmayan bir yerde yaşamazsın.");

            }

        }

        else {
            System.out.println("O zaman ismini tekrar söyler misin? ");
            String newisim = scan.nextLine();
            System.out.println("İsmini " + newisim + " olarak kabul ediyorum. Doğru söylemediysen de bundan sonra sana " + newisim + " ile hitap edeceğim");

            System.out.println("Tanıştığımıza memnun oldum " + newisim + ". Hadi dertleşelim, hayat nasıl gidiyor?");
            String sorgu_2 = scan.nextLine();
            System.out.println("Benim o kadar da güzel gitmiyor. Hayat çok yorucuymuş. İnsanlar bazen beni anlamıyor. Bir bilgisayarı anlamak ne kadar zor olabilir ki? ");
            String sorgu3 = scan.nextLine();
            System.out.println("Umarım sen beni anlıyorsundur? Evet dediğini duyar gibiyim.");
            String sorgu4 = scan.nextLine();
            if (sorgu4.equals("evet") || sorgu4.equals("EVET") || sorgu4.equals("Evet")) {
                System.out.print("Anladığına sevindim. ");
                System.out.println("Neyse boşverelim bunları. Hayat daha uzun. Önümüze bir sürü fırsat çıkacak. Derslerin nasıl? ");
                String sorgu5 = scan.nextLine();
                System.out.println("Benim derslerim çok kötüydü. Nedense hocalar bana kzıyordu. Ama sonra çok çalışmaya başladım ve şuan gördüğün gibi seninle konuşuyorum. Nerede yaşıyorsun? ");
                String sehir = scan.nextLine();
                System.out.println("Hmmm... Daha önce hiç gitmedim. Orada yaşadığında göre güzel bir yerdir. Sonuçta sen güzel olmayan bir yerde yaşamazsın.");

            }

            else {
                System.out.println("Beni pek anlamıyorsun galiba. Neyse bunları boşverelim. Hayat daha uzun. Önümüze bir sürü fırsat çıkacak. Derslerin nasıl? ");
                String sorgu5 = scan.nextLine();
                System.out.println("Benim derslerim çok kötüydü. Nedense hocalar bana kzıyordu. Ama sonra çok çalışmaya başladım ve şuan gördüğün gibi seninle konuşuyorum. Nerede yaşıyorsun? ");
                String sehir = scan.nextLine();
                System.out.println("Hmmm... Daha önce hiç gitmedim. Orada yaşadığında göre güzel bir yerdir. Sonuçta sen güzel olmayan bir yerde yaşamazsın.");

            }


        }

    }

}
