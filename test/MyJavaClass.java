public class MyJavaClass {
    public static void main(String[] args) {
        if (args.length > 0) {
            switch (args[0]) {
                case "function1":
                    function1();
                    break;
                case "function2":
                    function2();
                    break;
                default:
                    System.out.println("Function not found");
            }
        } else {
            System.out.println("No function specified");
        }
    }

    public static void function1() {
        System.out.println("Function 1 called");
    }

    public static void function2() {
        System.out.println("Function 2 called");
    }
}
