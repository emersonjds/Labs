package emersonjds.zoo.classes;

public class Patient {
	private int code;
	private String name;
	private String middleName;
	private int age;
	private char gender;
	private int telephone;
	private String address;
	
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMiddleName() {
		return middleName;
	}
	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public char getGender() {
		return gender;
	}
	public void setGender(char gender) {
		this.gender = gender;
	}
	public int getTelephone() {
		return telephone;
	}
	public void setTelephone(int telephone) {
		this.telephone = telephone;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	public void markConsultation() {
		System.out.println("A consulta foi marcada");
	}
	
	public void remarkConsult() {
		System.out.println("A consulta foi remarcada com sucesso");
	}
	
	public void cancelConsult() {
		System.out.println("A consulta foi cancelada com sucesso");
	}

	public String nome = 'Emerson';
}
