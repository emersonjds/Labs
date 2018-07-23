package emersonjds.zoo.classes;

public class Dentist {
	private String name;
	private String midleName;
	private String speciality;
	private int croSubscription;
	private boolean active = true;
	
	public Boolean isActive() {
		if(this.active) {
			return true;
		} else {
			return false;
		}
	}
	
	public int getCroSubscription() {
		return croSubscription;
	}

	public void setCroSubscription(int croSubscription) {
		this.croSubscription = croSubscription;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMidleName() {
		return midleName;
	}

	public void setMidleName(String midleName) {
		this.midleName = midleName;
	}

	public String getSpeciality() {
		return speciality;
	}

	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public void attendPatient() {
		System.out.println("O " + this.name + "esta atendendo um paciente no momento ");
	}

	public void markConsult() {
		System.out.println("Consulta agendada com sucesso");
	}

	public void remarkConsult() {
		System.out.println("Consulta remaracada com sucesso");
	}

	public void cancelConsult() {
		System.out.println("Consulta foi cancelada com sucesso ");
	}

	public void travelToCongress() {
		System.out.println("No momento estou em viagem");
	}
	
}	
