$(function(){

	
	
	/* French initialisation for the jQuery UI date picker plugin. */
	/* Written by Keith Wood (kbwood{at}iinet.com.au),
	                         Stéphane Nahmani (sholby@sholby.net),
	                         Stéphane Raimbault <stephane.raimbault@gmail.com> */
	jQuery(function($){
	        $.datepicker.regional['fr'] = {
	                closeText: 'Fermer',
	                prevText: 'Précédent',
	                nextText: 'Suivant',
	                currentText: 'Aujourd\'hui',
	                monthNames: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
	                        'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
	                monthNamesShort: ['janv.', 'févr.', 'mars', 'avril', 'mai', 'juin',
	                        'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
	                dayNames: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
	                dayNamesShort: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
	                dayNamesMin: ['D','L','M','M','J','V','S'],
	                weekHeader: 'Sem.',
	                dateFormat: 'dd/mm/yy',
	                firstDay: 1,
	                isRTL: false,
	                showMonthAfterYear: false,
	                yearSuffix: ''};
	        $.datepicker.setDefaults($.datepicker.regional['fr']);
	});
	
	/**
	 * dtsDiff
	 * @param stbeg start date YYYYMMDD
	 * @param stend end date YYYYMMDD
	 * @param units 'Y' 'M' 'D'
	 * @return diff in units
	 */
	dtsDiff = function(stbeg, stend, units){
		var dbeg = parseInt(stbeg.substring(6,8));
		var mbeg = parseInt(stbeg.substring(4,6));
		var ybeg = parseInt(stbeg.substring(0,4));

		var dend = parseInt(stend.substring(6,8));
		var mend = parseInt(stend.substring(4,6));
		var yend = parseInt(stend.substring(0,4));
			
		var dtbeg = new Date(ybeg, mbeg-1, dbeg);
		var dtend = new Date(yend, mend-1, dend);

		var msec = dtend - dtbeg;
		var coeff, delta;

		if (units == 'Y'){
			coeff = 1000 * 60 * 60 * 24 * 365.25;			// Pure GFK assumptions
			delta = (msec<0 ? -1 : 1) * Math.floor(Math.abs(msec)/coeff);
		} else if (units == 'M'){
			coeff = 1000 * 60 * 60 * 24 * 30.44;			// Pure GFK assumptions
			delta = (msec<0 ? -1 : 1) * Math.floor(Math.abs(msec)/coeff);
		} else{
			coeff = 1000 * 60 * 60 * 24;
			delta = (msec<0 ? -1 : 1) * Math.round(Math.abs(msec)/coeff);
		}

		return delta;
	};
	/**
	 * date2dts
	 * @param date DD/MM/YYYY
	 * @return stamp YYYYMMDD or empty if error
	 */
	date2dts = function(date){
		var tab = date.split("/");
		if (tab.length != 3)
			return "";

		var day = parseInt(tab[0]);
		var month = parseInt(tab[1]);
		var year = parseInt(tab[2]);

		if ((year = chkDate (day, month, year)) == 0)
			return "";
		month = (month < 10 ? "0" : "") + month;
		day = (day < 10 ? "0" : "") + day;

		return year + month + day;
	};
	/**
	 * dts2date
	 * @param dts YYYYMMDD
	 * @return date DD/MM/YYYY or empty if error 
	 */
	dts2date = function(dts){
		if (dts.length == 0)
			return "";
		
		var day = parseInt(dts.substring(6,8));
		var month = parseInt(dts.substring(4,6));
		var year = parseInt(dts.substring(0,4));
		
		if ((year = chkDate (day, month, year)) == 0)
			return "";

		month = (month < 10 ? "0" : "") + month;
		day = (day < 10 ? "0" : "") + day;
		
		return day + "/" + month + "/" + year;
	};
	/**
	 * chkDate
	 * @param day number
	 * @param month number
	 * @param year number
	 * @return year YYYY or 0 if error 
	 */
	chkDate = function(day, month, year){
		if (year <= 20)
			year = 2000 + year;
		else if (year <= 99)
			year = 1900 + year;
		if (year < 1915 || year > 2050)
			return 0;

		if (month < 1 || month > 12)
			return 0;

		if (day < 1 || day> 31)
			return 0;

		if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31)
			return 0;
		else if (month == 2){
			var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
			if (day> 29 || (day == 29 && ! isleap))
				return 0;
		}
		return year;
	};
	
	
    function addslashes(str) {
        str=str.replace(/\'/g,'\\\'');
        str=str.replace(/\"/g,'\\"');
        str=str.replace(/\\/g,'\\\\');
        str=str.replace(/\0/g,'\\0');
        return str;
   };
});


