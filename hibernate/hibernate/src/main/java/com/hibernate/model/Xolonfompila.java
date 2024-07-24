package com.hibernate.model;

import org.hibernate.annotations.Type;

import com.hibernate.model.custom.type.GenderType;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity(name = "XOLONFOMPILA")
public class Xolonfompila {

	@Id
	private Long id;
	
	@Column(name = "XOLONFOMPILA_NAME")
	private String name;
	/*
	 * It's not recommended to use converters with enums
	 * @Convert(converter = GenderConverter.class)
	 */
	@Type(GenderType.class)
	@Column(name = "XOLONFOMPILA_GENDER",length = 6)
	private Gender gender;
	
	/*
	 * There is a rebel group in the Xolonfompila's world
	 * 
	 * Hibernate provides 3 built-in converters for the common boolean mapping cases:
	 * YesNoConverter encodes a boolean value as 'Y' or 'N',
	 * TrueFalseConverter encodes a boolean value as 'T' or 'F', and
     * NumericBooleanConverter encodes the value as an integer, 1 for true, and 0 for false.
	 */
	@Basic
	@Convert(converter = org.hibernate.type.YesNoConverter.class)
	private boolean rebel;
}
