package emersonjds.zoo.classes;

public class Dentist {
	private String name;
	private String midleName;
	private String speciality;
	private boolean active = true;
	
	public Boolean isActive() {
		if(this.active) {
			return true;
		} else {
			return false;
		}
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
}	
