# active directory local computer

The &lt;active directory local computer&gt; objects are the Active Directory inspectors for the local computer. Caching (using XML files to represent the last data update) limits how often the client refreshes the AD data, reducing network traffic. These inspectors require network access to work. If no network connection is available and the information is not cached, then the inspectors will return NoSuchObject. AD user requests are limited to users that are either cached or have a local profile on the specified machine.

# distinguished name error message of &lt;active directory local computer&gt;

Active Directory error if unable to get the distinguished name (this is for debugging purposes).

# distinguished name of &lt;active directory local computer&gt;

Returns the computer&#39;s fully qualified active directory name in the distinguished name format, for instance, &#39;CN=ALBATROSS, CN=Computers, DC=bigfix, DC=com&#39;.Example: distinguished name of local computer of active directory - Returns CN=mymachinename,CN=Computers,DC=bigfix,DC=com.

# dns domainname of &lt;active directory local computer&gt;

No documentation exists.

# group &lt;string&gt; of &lt;active directory local computer&gt;

Returns the Active Directory group corresponding to the specified group of the given AD local computer.

# group of &lt;active directory local computer&gt;

Returns a list of the active directory groups for the specified local user.

# groups error message of &lt;active directory local computer&gt;

Returns the error message (if any) received when trying to get the groups for the specified active directory local computer.

# netbios domainname of &lt;active directory local computer&gt;

No documentation exists.

# sample time of &lt;active directory local computer&gt;

Returns the time that the specified item was sampled from Active Directory.Example: sample time of local computer of active directory - Returns a time corresponding to the specified sample time.