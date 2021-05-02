
<h4><span class="glyphicon glyphicon-user" ></span> Profile</h4>


<div class="btn-group btn-group-justified" role="group"  style="width: 100%; " >

  <div class="btn-group" role="group">
    <button type="button" class="btn btn-default"  onclick="save('');">
    	<span class="glyphicon glyphicon-ok" aria-hidden="true"  style="color: #428bca;"></span>
    	&nbsp; Enregistrer
    </button>
  </div>
  
</div>

<br><br>


<div style="width: 100%">
<form class="form-inline">
<input  type="hidden" name="id_res" id="id_res" value="{$id_res}">

<fieldset  class="pwFieldset">
<legend><span class="glyphicon glyphicon-comment" aria-hidden="true"></span> Informations</legend>


  <br>
  <div class="form-group" style="width: 45%">
    <label for="nom" style="width: 13%" >Nom</label>
    <input type="text" class="form-control" id="pnom" name="pnom" placeholder="" style="width: 70%" value="{$nom}" readonly="readonly">
  </div>
  
   <br>
  
  <div class="form-group" style="width: 45%">
    <label for="nom" style="width: 13%" >Prénom </label>
    <input type="text" class="form-control" id=pprenom name="pprenom" placeholder="" style="width: 70%" value="{$prenom}" readonly="readonly">
  </div>
  


      <br>
  <div class="form-group" style="width: 45%">
    <label for="nom" style="width: 13%" >Login </label>
    <input type="text" class="form-control" id="plogin" name="plogin" placeholder="" style="width: 70%" value="{$login}" readonly="readonly" >
  </div>
  
        <br>
  <div class="form-group" style="width: 45%">
    <label for="nom" style="width: 13%" >email </label>
    <input type="text" class="form-control" id="pmail" name="pmail" placeholder="" style="width: 70%" value="{$email}" >
  </div>
  
<br><br>

  </fieldset>

  <br><br>
  
<fieldset  class="pwFieldset">
<legend><span class="glyphicon glyphicon-briefcase" aria-hidden="true"></span> Mot de passe</legend>


  <br>
  <div class="form-group" style="width: 70%">
    <label for="nom" style="width: 30%" >Mot de passe</label>
    <input type="password" class="form-control" id="ppass"  name="ppass" placeholder="" style="width: 70%" value="">
  </div>
  
  <br>
  
  <div class="form-group" style="width: 70%">
    <label for="nom" style="width: 30%" >Confirmer mot de passe </label>
    <input type="password" class="form-control" id="ppass_confirm" nom="ppass_confirm" placeholder="" style="width: 70%" value="" >
  </div>

<br><br>

  </fieldset>
<br>
  
</form>