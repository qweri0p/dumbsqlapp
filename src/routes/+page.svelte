<script lang="ts">
    export let data;
    const result = data.result
</script>

<div>
    <form action="?/add" method="post">
        <label>
            Data
            <input type="text" name="data" required>
        </label><br>
        <!-- <label>
            Timestamp
            <input type="text" name="timestamp">
        </label><br> -->
        <button>Submit</button>
    </form>
    
    <table>
        <tr>
            <th>Data</th><th>Date</th><th>Delete Entry</th>
        </tr>
        {#each result as entry}
            <tr>
                <td>{entry.Data}</td>
                <td>{new Date(entry.Timestamp).toUTCString()}</td>
                <td><form method="POST" action="?/delete">
                    <input type="hidden" name="data" value={entry.Data}>
                    <input type="hidden" name="timestamp" value={entry.Timestamp}>
                    <button>X</button>
                </form></td>
            </tr>
        {/each}
    </table>
</div>

<style>
    td, th {
        border: 1px solid black;
        padding: 5px;
    }
    div {
        display:grid;
        grid-template: 1fr/40% 30%;
        gap:3% 3%;
        justify-items:stretch;
        align-items:stretch;
    }
    table {
        border-collapse: collapse;
        grid-column:1/2;
        grid-row:1/2;
    }
    form {
        grid-column:2/3;
        grid-row:1/2;
    }
    table, form {
        padding: 10%;
        border: 1px solid black;
        border-radius: 10px;
    }

</style>
