<?php 
$apiUrl = 'https://api.habboapi.net/badges?per_page=50'; 
$badges = json_decode(file_get_contents($api_url), true); 
foreach($badges['data'] as $badge){
	// Echo out badges
	echo '<img src="https://images.habbo.com/c_images/album1584/' . $badge['code'] . '.gif" />'; 
}
