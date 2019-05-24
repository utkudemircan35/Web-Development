import java.util.Scanner;

public class carpma {

    public static void main(String[] args) {

        System.out.println("Birinci Sayı: ");
        Scanner s = new Scanner(System.in);
        long sayi1 = s.nextLong();
        System.out.println("İkinci Sayı: ");
        long sayi2 = s.nextLong();
        System.out.println("Sonuç: " + (sayi1 * sayi2));


    }
}
